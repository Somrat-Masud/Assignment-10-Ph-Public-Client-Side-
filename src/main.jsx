import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Footer from './Footer/Footer';
import Home from './Components/Home/Home';
import Navber from './Navber/Navber';
import AddProducts from './Components/AddProducts/AddProducts';
import MyCart from './Components/MyCart/MyCart';
import Login from './Authintication/Login/Login';
import Update from './Components/Update/Update';
import Products from './Components/Home/Products';
import ErrorPage from './ErrorPage/ErrorPage';
import AuthProvider from './Authintication/Login/AuthProvider';
import Register from './Authintication/Login/Register/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
     
      {
        path:'/',
        element:<Navber></Navber>
      },
      {
        path:'/',
       element: <Products></Products>,
      //  loader: () => fetch("data.json")
      },
   
  
      {
        path:'/addProduct',
        element:<AddProducts></AddProducts>
      },
    
      {
        path:'/myCart',
        element:<MyCart></MyCart>,
        loader: () => fetch(`https://assignment-10-backend-server-m8smqtcbq-somrat-masuds-projects.vercel.app/brands`)
      },
      {
        path:'/brands/:id',
        element:<Update></Update>,
        loader: ({params}) => fetch(`https://assignment-10-backend-server-m8smqtcbq-somrat-masuds-projects.vercel.app/brands/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      
      {
        path:'/register',
        element:<Register></Register>
      },
     
      {
        path:'/',
        element:<Footer></Footer>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
