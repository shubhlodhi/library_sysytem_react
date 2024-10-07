import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Contact from '../components/contact.jsx'
import Book from '../components/Book_UI.jsx'
import About from '../components/about.jsx'
import Err from '../components/error.jsx'
import Sing from '../components/signin.jsx'
import Singlepage from '../components/singlePoage.jsx'
import Addpage from '../components/addpage.jsx'
// import Categ from '../components/category.jsx'
import Catego_header from '../components/ctaego_header.jsx'

// import './index.css'
const Router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Book/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
      path:"/signup",
      element:<Sing/>
      },
      {
      path:"/book/:id",
      element:<Singlepage />
      },
      {
        path:"/addpage",
        element:<Addpage/>
      },
      {
        path:"/catego/:genre",
        element:<Catego_header/>
      }


    ],
    errorElement:<Err/>
  }
]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}>

    </RouterProvider>
  </StrictMode>,
)
