import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
/* import { FirstStepsApp } from './FirstStepsApp' */
import { MyAwesomeApp } from './MyAwesomeApp'
import { FirstStepsApp } from './FirstStepsApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <FirstStepsApp />
    {/* <MyAwesomeApp /> */}
  </StrictMode>
)
