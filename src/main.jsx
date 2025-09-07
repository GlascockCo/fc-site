import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import GetInvolved from './pages/GetInvolved.jsx'
import Contact from './pages/Contact.jsx'
import './styles.css'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'services', element: <Services /> },
    { path: 'get-involved', element: <GetInvolved /> },
    { path: 'contact', element: <Contact /> },
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><RouterProvider router={router} /></React.StrictMode>
)
