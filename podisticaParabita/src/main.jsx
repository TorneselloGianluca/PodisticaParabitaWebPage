import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import logo from './assets/logo.jpeg'; 


const impostaFavicon = () => {
  const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/jpeg'; 
  link.href = logo;
  document.head.appendChild(link);
};

impostaFavicon();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)