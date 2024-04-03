import React, { useEffect } from 'react'
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom"
import Stream from './pages/Stream/Stream';
import Home from './pages/Home/Home';
import Main from './Main/Main'
import Aos from "aos"
import Videos from './pages/Videos/Videos';
import Merch from './pages/Merch/Merch';
import Details from './pages/Details/Details';
import Cart from './pages/Cart/Cart';
import Support from './pages/Support/Support';
import BLog from './pages/Blog/BLog';
import "aos/dist/aos.css"



const App = () => {


    const router = createBrowserRouter([
        {
            element: <Main />,
            children: [

                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/stream",
                    element: <Stream />
                },
                {
                    path: "/videos",
                    element: <Videos />
                },
                {
                    path: "/merch",
                    element: <Merch />
                },
                {
                    path: "/product-details/:id",
                    element: <Details />
                },
                {
                    path: "/support",
                    element: <Support />
                },
                {
                    path: "/blog",
                    element: <BLog />
                },
                {
                    path: "/cart",
                    element: <Cart />
                }

            ]
        }

    ]);
    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <>

            <RouterProvider router={router} />

        </>
    )

}

export default App