import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Level01 from './Routes/Level01.jsx'
import Level02 from './Routes/Level02.jsx'
import Level03 from './Routes/Level03.jsx'
import Level04 from './Routes/Level04.jsx'
import Level05 from './Routes/Level05.jsx'
import Level06 from './Routes/Level06.jsx'
import Level07 from './Routes/Level07.jsx'

import Final from './Routes/final.jsx'
import ErrorPage from './Routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Level01 />
      },
      {
        path: "/aviao",
        element: <Level02 />
      },
      {
        path: "/eveets",
        element: <Level03 />
      },
      {
        path: "/anomalia",
        element: <Level04 />
      },
      {
        path: "/noses",
        element: <Level05 />
      },
      {
        path: "/cucuta",
        element: <Level06 />
      },
      {
        path: "/alienista",
        element: <Level07 />
      },
     {
        path: "/gelo",
        element: <Final />
      }, 
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
