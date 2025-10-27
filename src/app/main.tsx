import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import Page from './page'
// import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page/>
  </StrictMode>,
)