import React, { useEffect } from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Main = () => {

    return (
        <>
            <Navbar />
            <main>

                <Outlet />

            </main>
            <Footer />
        </>
    )
}

export default Main