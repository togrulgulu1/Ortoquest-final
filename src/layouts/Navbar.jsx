import React, { useRef, useState, useEffect } from 'react'
import "./css/navbar.css"
import { IoLogoTwitch, IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
// import Login from './Login';


const Navbar = () => {

    const [active, setActive] = useState(false)
    
    // const loginDiv = useRef()

    const click = () => {

        setActive(!active)

        if (!active) {

            document.body.style.overflow = "hidden"

        } else {

            document.body.style.overflow = "auto"

        }
    }
    // useEffect(() => {

    //     const closeMenuClick = (event) => {

    //         if (active && !event.target.closest('.loginWindow')) {

    //             setActive(false)

    //         }
    //     };

    //     window.addEventListener('click', closeMenuClick)

    //     return () => {

    //         window.removeEventListener('click', closeMenuClick)

    //     }
    // }, [active])

    // const clickLogin = () => {

    //     setActive(!active)

    //     if (!active) {

    //         loginDiv.current.style.display = "block"
    //         document.body.style.overflow = 'hidden'
    //         document.body.style.backgroundColor = "red"
    //         console.log(document.body.style.backgroundColor);

    //     } else {

    //         loginDiv.current.style.display = "none"
    //         document.body.style.overflow = 'auto'
    //         document.body.style.backgroundColor = "white"

    //     }
    // }

    // !active ? loginDiv.current.style.display = "block" : loginDiv.current.style.display = "none"

    return (
        <>

            <header id='header'>

                <div className="con flex">

                    <button onClick={click} className={`burgerMenu ${active ? 'active' : ''}`}>
                        <span className='bar1'></span>
                        <span className='bar2'></span>
                        <span className='bar3'></span>
                    </button>

                    <div className="navLogo">
                        <Link className='link' to={"/"}>
                            <p>OTROQUEST</p>
                        </Link>
                    </div>

                    <div className='navRight'>

                        <nav className={`navbar ${active ? 'active' : ''}`}>

                            <ul className='navMenu flex'>
                                <li>stream</li>
                                <li>videos</li>
                                <li>merch</li>
                                <li>support</li>
                                <li>blog</li>
                            </ul>

                            {/* <button onClick={clickLogin} className="loginBtn">Login</button> */}


                            <div className="socialBurger">
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

                        </nav>


                        {/* <div ref={loginDiv} className="loginWindow">

                            <Login />

                        </div> */}

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