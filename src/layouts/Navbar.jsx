import React, { useRef, useState, useEffect } from 'react'
import "./css/navbar.css"
import { IoLogoTwitch, IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link, NavLink, useLocation } from 'react-router-dom';
// import Login from './Login';


const Navbar = () => {

    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(null)

    // const loginDiv = useRef()

    const handleLinkClick = () => {
        setActive(!active);
    };

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

    let location = useLocation();

    useEffect(() => {

        const navbar = document.querySelector("#header")

        if (location.pathname === "/merch" || location.pathname.includes("/product-details")) {

            navbar.style.backgroundColor = "#e13c33";

        } 
        // else if (location.pathname === "/cart") {

        //     navbar.style.backgroundColor = "#fff";
        //     navbar.style.color = "#000"

        // }
        else {

            navbar.style.backgroundColor = "#000";

        }


    })
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
                        <NavLink
                            className={`active2 ${active2 === 'otroquest' ? 'active2' : ''}`}
                            onClick={() => setActive2('otroquest')}
                            to={"/"}
                        >
                            <p>otroquest</p>
                        </NavLink>
                    </div>

                    <div className='navRight'>

                        <nav className={`navbar ${active ? 'active' : ''}`}>

                            <ul className='navMenu flex'>

                                <li>
                                    <NavLink
                                        to={"/stream"}
                                        className={`link ${active2 === 'stream' ? 'active' : ''}`}
                                        onClick={() => setActive2('stream')}
                                    >
                                        <span>stream</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to={"/videos"}
                                        className={`link ${active2 === 'videos' ? 'active' : ''}`}
                                        onClick={() => setActive2('videos')}
                                    >
                                        <span>videos</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/merch"}
                                        className={`link ${active2 === 'merch' ? 'active' : ''}`}
                                        onClick={() => setActive2('merch')}
                                    >
                                        <span>merch</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to={"/support"}
                                        className={`link ${active2 === 'support' ? 'active' : ''}`}
                                        onClick={() => setActive2('support')}
                                    >
                                        <span>support</span>
                                    </NavLink>
                                </li>
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
                            <NavLink to={"/cart"}
                                className={`link ${active2 === 'cart' ? 'active' : ''}`}
                                onClick={() => setActive2('cart')}
                            >
                                <span className='flex'>
                                    <PiShoppingCartSimpleFill />
                                </span>
                            </NavLink>
                        </div>


                    </div>

                </div>

            </header>

        </>
    )
}

export default Navbar