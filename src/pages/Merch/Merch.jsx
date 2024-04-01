import React, { useEffect } from 'react'
import ShopNow from './Components/ShopNow'
import images from "../../image.json"


const Merch = () => {
   
    return (
        <section id='merch'>

            <ShopNow images={images}/>

        </section>
    )
}

export default Merch