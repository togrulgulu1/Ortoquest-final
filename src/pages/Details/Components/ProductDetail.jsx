import React from 'react'
import "../assets/css/productDetail.css"
import { useParams } from 'react-router-dom'
import {useDispatch} from "react-redux"
import 'swiper/css';
import { addToCart } from '../../../features/cartSlice';

const ProductDetail = ({ images }) => {

    const { slug } = useParams()
    const product = images.find((image) => image.slug === slug)
    const dispatch = useDispatch()

    const  handleClick = (product) =>{
        dispatch(addToCart(product))
        console.log(product);
    }

    return (

        <section id='products'>

            <div className="con flex">

                <div className="productMain">

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
                                    <option value="all">Select Size</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                    <option value="xlarge">X-Large</option>
                                </select>
                            </div>

                            <div className="selectCount">
                                <p>Quantity:</p>
                                <input type="number" min={1} max={10} defaultValue={1} />
                            </div>

                            <button onClick={()=> handleClick(product)}>Add to Cart</button>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default ProductDetail