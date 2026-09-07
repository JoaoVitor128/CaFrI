import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Final from './Routes/final.jsx'
import ErrorPage from './Routes/ErrorPage.jsx'

import Level01 from './Routes/Level01.jsx'
import Level02 from './Routes/Level02.jsx'
import Level03 from './Routes/Level03.jsx'
import Level04 from './Routes/Level04.jsx'
import Level05 from './Routes/Level05.jsx'
import Level06 from './Routes/Level06.jsx'
import Level07 from './Routes/Level07.jsx'
import Level08 from './Routes/Level08.jsx'
import Level09 from './Routes/Level09.jsx'
import Level10 from './Routes/Level10.jsx'

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
        element: <Level08 />
      },
      {
        path: "/sem-mito",
        element: <Level09 />
      },
      {
        path: "morta",
        element: <Level10/>
      },
      {
        path: "asch-schamaliyya",
        element: <Final/>
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
