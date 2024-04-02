import React from 'react'
import "../assets/css/shop.css"
import Slider from './Slider'
import image from '../../../image.json'
import { Link } from 'react-router-dom'



const Shop = () => {
    return (
        <>

            <section id='shop'>

                <div className="con">

                    <div className="shopMain">

                        <div className="shopHead">
                            <Link className='stopHeadLink' href="#" to={"/merch"}>
                                <h1>Shop Merch</h1>
                            </Link>
                        </div>

                        <Slider image={image} />

                    </div>

                </div>

            </section>

        </>
    )
}

export default Shop