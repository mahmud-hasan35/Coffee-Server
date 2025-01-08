import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import CoffeeCards from './pages/Coffees/CoffeeCards.jsx'
import AddCoffee from './pages/addCoffee/AddCoffee.jsx'
import UpdateCard from './pages/Update/Update.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <CoffeeCards/>
  },
  {
    path: '/AddCoffee',
    element: <AddCoffee/>
  },
  {
    path:'/updateCard/:id',
    element: <UpdateCard/>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  
  </StrictMode>
)
