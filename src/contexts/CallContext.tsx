import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { RetellWebClient } from 'retell-client-js-sdk';
import { useAudio } from './AudioContext';

type CallStatus = 'idle' | 'connecting' | 'active';

interface CallContextType {
  callStatus: CallStatus;
  startCall: () => Promise<void>;
  endCall: () => void;
}

// Single client shared by every "talk to Anvela" button so two demo calls
// can never run at the same time and all buttons reflect the same state.
const retellClient = new RetellWebClient();

const CallContext = createContext<CallContextType | undefined>(undefined);

export const CallProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isMuted, setIsMuted } = useAudio();
  const [callStatus, setCallStatus] = useState<CallStatus>('idle');

  // Remember whether ambient audio was muted before the call so we can
  // restore the user's choice instead of force-unmuting when the call ends.
  const wasMutedBeforeCall = useRef(false);
  const isMutedRef = useRef(isMuted);
  isMutedRef.current = isMuted;

  const startCall = async () => {
    if (callStatus !== 'idle') return;
    setCallStatus('connecting');
    wasMutedBeforeCall.current = isMutedRef.current;
    setIsMuted(true);
    try {
      const res = await fetch('https://n8n.srv1401769.hstgr.cloud/webhook/anvela/create-web-call', { method: 'POST' });
      const { access_token, sample_rate } = await res.json();
      await retellClient.startCall({ accessToken: access_token, sampleRate: sample_rate ?? 16000 });
      setCallStatus('active');
    } catch {
      setIsMuted(wasMutedBeforeCall.current);
      setCallStatus('idle');
    }
  };

  const endCall = () => {
    retellClient.stopCall();
    setIsMuted(wasMutedBeforeCall.current);
    setCallStatus('idle');
  };

  useEffect(() => {
    const onEnded = () => {
      setIsMuted(wasMutedBeforeCall.current);
      setCallStatus('idle');
    };
    retellClient.on('call_ended', onEnded);
    return () => {
      retellClient.off('call_ended', onEnded);
    };
  }, [setIsMuted]);

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
