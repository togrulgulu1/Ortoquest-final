import React from 'react'
import ProductDetail from './Components/ProductDetail'
import images from "../../image.json"
import OtherPro from './Components/OtherPro'

const Details = () => {
    return (
        <>

            <ProductDetail images={images}/>
            <OtherPro images={images}/>

        </>
    )
}

export default Details