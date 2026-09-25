import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { Userprovider } from './Components/Hooks/Usecontex/context/Usercontex.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Userprovider> */}
    <App />
    {/* </Userprovider>/ */}
  </StrictMode>,
)
