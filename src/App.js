import React, { useEffect } from 'react'
import Main from './Main/Main'
import Aos from "aos"
import "aos/dist/aos.css"

const App = () => {

    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <>

            <Main />

        </>
    )
    
}

export default App