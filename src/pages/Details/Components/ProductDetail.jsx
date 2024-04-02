import React from 'react'
import "../assets/css/productDetail.css"
import { useParams } from 'react-router-dom'


const ProductDetail = ({ images }) => {

    const { id } = useParams()
    const product = images.find((image) => image.id === parseInt(id))

    return (

        <section id='products'>

            <div className="con flex">

                <div className="productMain">

                    <div className="productTop">

                        <div className='productImg flex'>
                            <img src={product.src} alt="" />
                            <img src={product.src2} alt="" />
                        </div>

                        <div className="productData">

                            <h2>{product.title}</h2>
                            <p className='productPrice'>${product.price}.00</p>
                            <p className='productDesc'>{product.desc}</p>
                            <div className="selectSize">
                                <p>Size:</p>
                                <select>
                                    <option>Select Size</option>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>X-Large</option>
                                </select>
                            </div>

                            <div className="selectCount">
                                <p>Quantity:</p>
                                <input type="number" min={1} max={10} defaultValue={1} />
                            </div>

                            <button>Add to Cart</button>

                        </div>



                    </div>

                    <div className="productBottom">

                    </div>


                </div>


            </div>



            {/* <div>
                {images.map((image) => (
                    <div key={image.id}>
                        <img src={image.src} alt="" />
                    </div>
                ))}
            </div> */}

        </section>
    )
}

export default ProductDetail