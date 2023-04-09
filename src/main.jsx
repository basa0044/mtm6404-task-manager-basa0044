import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NewList from './routes/NewList'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListTemplate from './routes/ListTemplate'

const pages = []
console.log(pages)

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      {
        path: "/",
        element: <Navbar/>
      },
      {
        path: "/lists/:id",
        element: <ListTemplate/>
      },
      {
        path: "/NewList",
        element: <NewList/>
      }
    ] 
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)