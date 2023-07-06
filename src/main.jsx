import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/router.jsx'
import ThemeProvider from './Provider/ThemeProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <React.StrictMode>
   
    <ThemeProvider> <RouterProvider router={router} /></ThemeProvider>
  </React.StrictMode>,
  </div>
)
