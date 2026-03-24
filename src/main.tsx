import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './contexts/LanguageContext.tsx'
import { AudioProvider } from './contexts/AudioContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </AudioProvider>
  </StrictMode>,
)
