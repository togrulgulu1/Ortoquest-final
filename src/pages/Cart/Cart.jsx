import React from 'react'
import "./assets/css/cart.css"
import { useSelector } from 'react-redux'

const Cart = () => {

  const cartItem = useSelector(state => state.cart.cartItem)

  return (

    <section id='cart'>
      <div className="con flex">

        <div className="cartMain">

          {cartItem.map((item) => (

            <div key={item.id}>

              <img src={item.src} alt="" />
              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </div>
    </section>

  )
}

export default Cart