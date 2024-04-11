import React from 'react'
import './assets/css/notCart.css'
import { Link } from 'react-router-dom'

const NotCart = () => {
    return (
        <section id='notCart'>
            <div className="notMain flex">
                <h2>Shopping Cart</h2>
                <p>You have nothing in your shopping cart.</p>
                <Link to={"/merch"}>
                    <button>continue shopping</button>
                </Link>
            </div>
        </section>
    )
}

export default NotCart