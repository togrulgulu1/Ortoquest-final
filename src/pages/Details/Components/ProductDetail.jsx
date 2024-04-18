import React, { useEffect, useState } from 'react'
import "../assets/css/productDetail.css"
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch } from "react-redux"
import 'swiper/css';
import { addToCart } from '../../../features/counterSlice';
import { toast } from 'react-toastify';

const ProductDetail = ({ images }) => {

    let [selectedSize, setSelectedSize] = useState('all');
    let [quantity, setQuantity] = useState(1)
    let [error, setError] = useState(' ')
    const { slug } = useParams()
    const product = images.find((image) => image.slug === slug)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        setSelectedSize('')
        setQuantity(1)
    }, [location.pathname])

    const handleClick = (product) => {

        if (!selectedSize) {

            setError('Please select a size')

        } else {

            dispatch(addToCart({ ...product, selectedSize, quantity }))
            setError('')
            toast.success(`${product.title}. Size: ${selectedSize} added to cart`, {
                position: "top-center",
                autoClose: 3000,
            })

        }

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
                        <p className='productPrice'>${parseInt(product.price)}.00</p>
                        <p className='productDesc'>{product.desc}</p>
                        <div className="selectSize">
                            <p>Size:</p>
                            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                                <option value="all">Select Size</option>
                                <option value="S">{product.small}</option>
                                <option value="M">{product.medium}</option>
                                <option value="L">{product.large}</option>
                                <option value="XL">{product.xLarge}</option>
                            </select>
                            {error && <p className='errorDesc flex' style={{ color: 'red' }}>{error}</p>}
                        </div>

                        <div className="selectCount">
                            <p>Quantity:</p>
                            <input value={quantity} type="number" min={1} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                        </div>

                        <button onClick={() => handleClick(product)}>Add to Cart</button>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default ProductDetail