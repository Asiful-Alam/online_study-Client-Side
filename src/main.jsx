import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home';
import Chat from './Component/Chat';
import AuthProvider from './Provider/AuthProvider';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CreateAssignment from './Pages/CreateAssignment';
import ErrorPage from './Pages/ErrorPage';
import AllAssignment from './Pages/AllAssignment';
import Update from './Pages/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/chat",
        element:<Chat></Chat>,
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/createassignment",
        element:<CreateAssignment></CreateAssignment>
      },
      {
        path: "/assignment",
        element:<AllAssignment></AllAssignment>,
        loader: () => fetch('http://localhost:5000/assignment').then(res => res.json()),
      },
      {
        path:"/update",
        element:<Update></Update>,
        // loader:({params})=> fetch(`http://localhost:5000/${params.email}/${params.id}`)
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
