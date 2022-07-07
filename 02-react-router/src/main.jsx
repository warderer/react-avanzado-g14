import React from 'react'
import ReactDOM from 'react-dom/client'
/* Importar BrowserRouter, que dota a mi App de poder manejar rutas
Debe estar en un componente superior, para que este disponible en toda mi
aplicación */
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Hago que router envuelva a mi Aplicación */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
