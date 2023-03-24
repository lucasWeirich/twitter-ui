import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesPage from './routes/routesPage'
import './assets/css/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RoutesPage />
  </React.StrictMode>,
)
