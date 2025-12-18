import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'

const conteiner = document.querySelector("div#root")
const root = createRoot(conteiner)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)