import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx'
import Cars from './routes/Cars.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<ErrorPage />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path:'cars',
        element:<Cars />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
