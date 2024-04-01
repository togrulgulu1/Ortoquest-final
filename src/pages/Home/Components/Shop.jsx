import React from 'react'
import "../assets/css/shop.css"
import Slider from './Slider'
import image from '../../../image.json'

const Shop = () => {
    return (
        <>

            <section id='shop'>

                <div className="con">

                    <div className="shopMain">

                        <div className="shopHead">
                            <h1>Shop Merch</h1>
                        </div>

                        <Slider image={image} />

                    </div>

                </div>

            </section>

        </>
    )
}

export default Shop