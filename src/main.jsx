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
import Details from './Pages/Details';
import MyList from './Pages/MyList';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Submit from './Pages/Submit';
import AllList from './Pages/AllList';




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
        element:<PrivateRoute>
          <CreateAssignment></CreateAssignment>
        </PrivateRoute>
      },
      {
        path: "/assignment",
        element:<AllAssignment></AllAssignment>,
        loader: () => fetch('http://localhost:5000/assignment').then(res => res.json()),
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        // loader:({params})=> fetch(`http://localhost:5000/${params.email}/${params.id}`)
        loader:(params) => fetch(`http://localhost:5000/${params.id}`)
      },
      // Update route configuration in main.jsx
      {
        path: "/details/:id",
        element: <Details />
      },
      {
        path: "/mylist",
        element: <PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>
      },
      {
        path: "/submit/:id",
        element: <Submit></Submit>
      },
      {
        path: "/alllist",
        element: <PrivateRoute>
          <AllList></AllList>
        </PrivateRoute>
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
