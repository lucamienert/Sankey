import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root, ErrorPage, CoinDetails } from './routes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{

      path: "coins/:coinId",
      element: <CoinDetails />
    }]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
