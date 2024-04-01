import React from 'react'
import "../assets/css/shopNow.css"

const ShopNow = ({ images }) => {
    return (
        <section id='shopNow'>

            <div className="con flex">

                <div className="shopNowMain">

                    <div className="shopNowHead">
                        <h1>Shop Now</h1>
                    </div>

                    <div className="shopNowImg flex">

                        {images.map(image => (

                            <div key={image.id}>

                                <div className="imgDivShop" id={image.id}>

                                    <div className="imageDiv">
                                        <img className='imgSmall' src={image.src} alt="" />
                                        <img className='imgBig' src={image.src2} alt="" />
                                    </div>

                                    <h4>{image.title}</h4>
                                    <p>${image.price}.00</p>
                                </div>

                            </div>

                        ))}
                    </div>

                </div>

            </div>

        </section>
    )
}

export default ShopNow