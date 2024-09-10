import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { EventProvider } from './context/EventContext.tsx'
import { ModalProvider } from './context/ModalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </EventProvider>
  </StrictMode>,
)
