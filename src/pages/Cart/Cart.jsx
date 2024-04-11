import React from 'react'
import "./assets/css/cart.css"
import { useDispatch, useSelector } from 'react-redux'

import NotCart from './NotCart'
import { addToCart, decreaseBtn } from '../../features/counterSlice'

const Cart = () => {

  const cartItem = useSelector(state => state.cart.cartItem)
  const dispatch = useDispatch()


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
                    {console.log(item.id)}
                  <img src={item.src} alt="" />
                  <p className='cartDivTitle'>{item.title}</p>
                  <p className='cartDivSize'>Size: </p>
                  <div className="btn">
                    <button onClick={() => dispatch(decreaseBtn(item))}>-</button>
                    <span>{item.cartQuantity}</span>
                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>
                  <p className='cartDivPrice'>${item.price}.00</p>


                </div>

              ))}

            </div>

          </div>
        </section>

      )}

    </>

  )
}

export default Cart