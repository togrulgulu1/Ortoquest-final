import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Stream from './Stream/Stream';
import Home from './Home/Home';
import Main from './Main/Main'
import Aos from "aos"
import "aos/dist/aos.css"
import Videos from './Videos/Videos';

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