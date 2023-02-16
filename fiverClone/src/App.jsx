import React from 'react';
import Navbar from './components/navbar/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import MyGiggs from './pages/myGigs/MyGiggs';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Add from './pages/add/Add';

import "./app.scss"

function App() {

  const Layout = () => {
    return (
      <>      
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>

    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/mygigs",
          element: <MyGiggs/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
        {
          path: "/add",
          element: <Add/>
        }
      
      ]
    },
  ]);


  return (
    <div>
    <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
