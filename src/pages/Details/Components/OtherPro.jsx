import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/otherPro.css"

const OtherPro = ({ images }) => {
    return (
        <section id='other'>

            <div className="con flex">

                <div className="otherMain">

                    <div className="otherHead">
                        <h2>Check these out</h2>
                    </div>

                    <div className="shopNowImg flex">

                        {images.map(image => (

                            <Link key={image.id} className='shopLink' to={`/product-details/${image.slug}`}>

                                <div >

                                    <div className="imgDivShop" id={image.id}>

                                        <div className="imageDiv">
                                            <img className='imgSmall' src={image.src} alt="" />
                                            <img className='imgBig' src={image.src2} alt="" />
                                        </div>

                                        <h4>{image.title}</h4>
                                        <p>${image.price}.00</p>
                                        
                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}

export default OtherPro