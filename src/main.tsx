import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShopApp } from './ShopApp'
import './css/index.css'
import './css/reset.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ShopApp />
  </React.StrictMode>,
)
