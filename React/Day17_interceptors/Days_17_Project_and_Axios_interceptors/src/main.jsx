import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Approutes from './routes/Approutes.jsx'
import { Auth_cont } from './context/Auth_cont.jsx'
import {ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Auth_cont >
    <Approutes/>
  <ToastContainer position="top-right" autoClose={2000} />
  </Auth_cont>
)
