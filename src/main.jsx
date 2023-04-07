import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>, 
  },
  {
    path: "/new",
    element:<Navbar/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)