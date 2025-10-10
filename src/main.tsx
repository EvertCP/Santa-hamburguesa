import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!

// Agregar clase de máscara al root
rootElement.classList.add('reveal-mask')

// Remover la clase después de la animación
setTimeout(() => {
  rootElement.classList.add('reveal-complete')
}, 3000)

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)