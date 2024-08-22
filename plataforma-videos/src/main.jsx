import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom' // Importação do roteador
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import Contato from './pages/Contato/Contato.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

// Criação de rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: "home", element: <Home />},
      {path: "sobre", element: <Sobre />},
      {path: "contato", element: <Contato />},
      {path: "*", element: <PageNotFound />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)