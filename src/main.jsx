import './main.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/pages/About.jsx'
import Home from './components/pages/Home.jsx'
import Work from './components/pages/Work.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Home />,
  },
  {
    path: "/mon-parcours",
    element:
      <About />,
  },
  {
    path: "/mes-projets",
    element: <Work />,
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
