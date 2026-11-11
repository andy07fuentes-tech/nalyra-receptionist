import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { RetellClient } from 'retell-client-js-sdk';
import type { WebCallSession } from 'retell-client-js-sdk';
import { useAudio } from './AudioContext';

type CallStatus = 'idle' | 'connecting' | 'active';

interface CallContextType {
  callStatus: CallStatus;
  startCall: () => Promise<void>;
  endCall: () => void;
}

// Retell retired POST /v2/create-web-call and the 2.x RetellWebClient flow on
// 2026-10-18. The 3.x SDK creates the call itself (POST /v3/create-web-call),
// so we route that one request to our n8n webhook, which holds the Retell key
// and pins the DEMO agent. Nothing secret ships to the browser.
const CREATE_WEB_CALL_URL = 'https://n8n.srv1401769.hstgr.cloud/webhook/anvela/create-web-call-v3';

const proxyFetch: typeof fetch = (input) => {
  const path = new URL(typeof input === 'string' ? input : input instanceof URL ? input.href : input.url).pathname;
  if (path === '/v3/create-web-call') {
    // The webhook ignores the body: the agent is fixed server-side.
    return fetch(CREATE_WEB_CALL_URL, { method: 'POST' });
  }
  // The SDK only makes other requests (e.g. stop-call when a visitor cancels
  // mid-connect) as best effort. Never forward them to the create webhook,
  // or a cancel would start a second call. Retell's not-joined timeout cleans up.
  return Promise.resolve(new Response(null, { status: 204 }));
};

// Single client shared by every "talk to Anvela" button so two demo calls
// can never run at the same time and all buttons reflect the same state.
// The key is a placeholder: the real one lives in n8n.
const retellClient = new RetellClient({ key: 'proxied-by-n8n', fetch: proxyFetch });

const CallContext = createContext<CallContextType | undefined>(undefined);

export const CallProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isMuted, setIsMuted, play, pause, isPlaying } = useAudio();
  const [callStatus, setCallStatus] = useState<CallStatus>('idle');
  const sessionRef = useRef<WebCallSession | null>(null);

  // Remember how ambient audio was set before the call so we can restore the
  // user's choice instead of force-unmuting (or force-playing) when it ends.
  const wasMutedBeforeCall = useRef(false);
  const wasPlayingBeforeCall = useRef(false);
  const isMutedRef = useRef(isMuted);
  isMutedRef.current = isMuted;
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  // Muting alone leaves the <audio> element playing silently, which keeps it
  // holding the audio session and competing with the mic on iOS. Stop it for real.
  const silenceAmbient = () => {
    wasMutedBeforeCall.current = isMutedRef.current;
    wasPlayingBeforeCall.current = isPlayingRef.current;
    setIsMuted(true);
    pause();
  };

  const restoreAmbient = () => {
    setIsMuted(wasMutedBeforeCall.current);
    if (wasPlayingBeforeCall.current) play();
  };
  // Session hooks are bound once per call; read the latest version through a ref.
  const restoreAmbientRef = useRef(restoreAmbient);
  useEffect(() => {
    restoreAmbientRef.current = restoreAmbient;
  });

  const startCall = async () => {
    if (callStatus !== 'idle' || sessionRef.current) return;
    setCallStatus('connecting');
    silenceAmbient();

    // Must run inside the click handler: the microphone prompt happens here.
    const session = retellClient.createWebCall({
      agent_id: 'agent_8e79799ac3193dc848e0a1bebd', // DEMO; n8n enforces this anyway
      hooks: {
        onStatus: (status) => {
          if (status === 'live') setCallStatus('active');
        },
        // Every ending lands here (hang-up, agent ends, mic denied, network
        // lost, webhook failure), so this is the one place the UI resets.
        onEnd: () => {
          if (sessionRef.current !== session) return;
          sessionRef.current = null;
          restoreAmbientRef.current();
          setCallStatus('idle');
        },
        onError: (err) => console.error('[Anvela demo call]', err),
      },
    });
    sessionRef.current = session;
  };

  const endCall = () => {
    // Triggers onEnd, which resets the UI and the ambient audio.
    void sessionRef.current?.end();
  };

  return (
    <CallContext.Provider value={{ callStatus, startCall, endCall }}>
      {children}
    </CallContext.Provider>
  );
};

export const useCall = () => {
  const context = useContext(CallContext);
  if (context === undefined) {
    throw new Error('useCall must be used within a CallProvider');
  }
  return context;
};
