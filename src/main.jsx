import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import ListTemplate from './routes/ListTemplate'
import NewList from './routes/NewList'
import Lists from './components/Lists'


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      {
        path: "/",
        element: <Lists/>
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