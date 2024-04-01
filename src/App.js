import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Stream from './pages/Stream/Stream';
import Home from './pages/Home/Home';
import Main from './Main/Main'
import Aos from "aos"
import "aos/dist/aos.css"
import Videos from './pages/Videos/Videos';
import Merch from './pages/Merch/Merch';


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