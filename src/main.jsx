import './main.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/pages/About.jsx'
import Home from './components/pages/Home.jsx'
import Work from './components/pages/Work.jsx'
import FormContact from './components/pages/FormContact.jsx'
import Layout from './components/Layout.jsx'
import Introuvable from './components/pages/Introuvable.jsx'



const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/mon-parcours", element: <About /> },
      { path: "/mes-projets", element: <Work /> },
      { path: "/contact", element: <FormContact /> },
      { path: "*", element: <Introuvable /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
