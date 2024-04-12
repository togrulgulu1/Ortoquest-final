import React, { useEffect } from 'react'
import "./assets/css/cart.css"
import { useDispatch, useSelector } from 'react-redux'
import NotCart from './NotCart'
import { addToCart, decreaseBtn, deleteBtn, getTotal } from '../../features/counterSlice'
import { IoClose } from "react-icons/io5";

const Cart = () => {

  const cart = useSelector((state) => state.cart)
  const selectedSize = useSelector(state => state.cart.selectedSize);
  const cartItem = useSelector(state => state.cart.cartItem)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal())
  }, [cart, dispatch])


  return (
    <>

      {cartItem.length === 0 ? (

        <NotCart />

      ) : (

        <section id='cart'>

          <div className="con flex">

            <div className="cartMain">

              <h2>Shopping Time</h2>

              {cartItem.map((item) => (

                <div className='cartDiv' key={item.id} id={item.id}>

                  <img src={item.src} alt="" />

                  <div className='flex'>
                    <h3 className='cartDivTitle'>{item.title}</h3>
                    <p className='cartDivSize'>Size: {item.selectedSize}</p>
                    <div className="btn">
                      <button onClick={() => dispatch(decreaseBtn(item))}>-</button>
                      <span>{item.cartQuantity}</span>
                      <button onClick={() => dispatch(addToCart({ ...item, selectedSize }))}>+</button>
                    </div>
                  </div>

                  <div className='cartDivRight'>
                    <button onClick={() => dispatch(deleteBtn(item))}><span><IoClose /></span></button>
                    <p className='cartDivPrice'>${item.totalPrice}.00</p>
                  </div>
                </div>

              ))}

              <div className="subTotal">
                <h2>subtotal: ${cart.cartTotalAmount}</h2>
              </div>

            </div>

          </div>
        </section>

      )}

    </>

  )
}

export default Cart