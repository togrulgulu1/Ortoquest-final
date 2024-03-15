import React, { useState } from 'react'
import "./css/navbar.css"
import { IoLogoTwitch, IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [active, setActive] = useState(false)

    return (
        <>

            <header id='header'>

                <div className="con flex">

                    <button onClick={() => setActive(!active)} className={`burgerMenu ${active ? 'active':''}`}>
                        <span className='bar1'></span>
                        <span className='bar2'></span>
                    </button>

                    <div className="navLogo">
                        <Link className='link' to={"/"}>
                            <p>OTROQUEST</p>
                        </Link>
                    </div>

                    <div className='navRight'>

                        <nav className="navbar">

                            <ul className='navMenu flex'>
                                <li>stream</li>
                                <li>videos</li>
                                <li>merch</li>
                                <li>support</li>
                                <li>blog</li>
                            </ul>

                        </nav>

                        <div className="social">
                            <Link to={"https://www.twitch.tv/"} target='_blank'>
                                <span>
                                    <IoLogoTwitch />
                                </span>
                            </Link>

                            <Link to={"https://www.youtube.com/squarespace"} target='_blank'>
                                <span>
                                    <FaYoutube />
                                </span>
                            </Link>

                            <Link to={"https://www.instagram.com/squarespace/"} target='_blank'>
                                <span>
                                    <IoLogoInstagram />
                                </span>
                            </Link>
                        </div>

                        <div className="cart">
                            <span className='flex'>
                                <PiShoppingCartSimpleFill />
                            </span>
                        </div>

                    </div>

                </div>

            </header>



        </>
    )
}

export default Navbar