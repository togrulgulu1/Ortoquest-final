import React from 'react'
import './assets/css/notFound.css'
import { Link } from 'react-router-dom'
import imgError from './assets/image/errorr.png'

const NotFound = () => {
  return (
    <section id='notFound'>
      <div className="flex">

        <div className="notFoundMain">

          <img src={imgError} alt="" />
          <h1>OOPS !</h1>
          <h5>404 - PAGE NOT FOUND</h5>
          <p>There is an error in the URL entered into your web browser. Please check the URL and try again. The page you are looking for has been moved or deleted.</p>
          <Link to={"/"} className='notLink'>
            <button>GOT TO HOMEPAGE</button>
          </Link>

        </div>

      </div>
    </section>
  )
}

export default NotFound