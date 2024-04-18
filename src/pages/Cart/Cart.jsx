import React, { useEffect } from 'react'
import "./assets/css/cart.css"
import { useDispatch, useSelector } from 'react-redux'
import NotCart from './NotCart'
import { addToCart, decreaseBtn, deleteBtn, getTotal } from '../../features/counterSlice'
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify'

const Cart = () => {

  const cart = useSelector((state) => state.cart)
  // const selectedSize = useSelector(state => state.cart.selectedSize);
  // const id = useSelector(state => state.cart.id);
  const cartItem = useSelector(state => state.cart.cartItem)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal())
  }, [cart, dispatch])

  const deleteClick = (item) => {

    dispatch(deleteBtn(item))
    toast.info(`${item.title}. Size: ${item.selectedSize} removed from cart`, {
      position: "top-center",
      autoClose: 3000,
    })

  }


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

                <div className='cartDiv' key={item.tempId} id={item.tempId}>

                  <img src={item.src} alt="" />

                  <div className='flex'>

                    <h3 className='cartDivTitle'>{item.title}</h3>
                    <p className='cartDivSize'>Size: {item.selectedSize}</p>
                    <div className="btn">
                      <button onClick={() => dispatch(decreaseBtn(item))}>-</button>
                      <div>{item.cartQuantity}</div>
                      <button onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}>+</button>
                    </div>

                  </div>

                  <div className='cartDivRight'>

                    <button onClick={() => deleteClick(item)}><span><IoClose /></span></button>
                    <p className='cartDivPrice'>${item.totalPrice}.00</p>

                  </div>

                </div>

              ))}

              <div className="subTotal">
                <h2>subtotal: ${cart.cartTotalAmount}.00</h2>
              </div>

            </div>

          </div>
        </section>

      )}

    </>

  )
}

export default Cart