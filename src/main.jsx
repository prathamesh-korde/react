import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Home />*/}
    <App/>
  </StrictMode>,
)
