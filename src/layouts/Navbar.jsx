import React, { useRef, useState, useEffect } from 'react'
import "./css/navbar.css"
import { IoLogoTwitch, IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link, NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {

    const [active, setActive] = useState(false)

    const click = () => {

        setActive(!active)

        if (!active) {

            document.body.style.overflow = "auto"

        } else {

            document.body.style.overflow = "hidden"

        }

    }


    let location = useLocation();

    useEffect(() => {

        const header = document.querySelector("#header")
        const navbar = document.querySelector(".navbar")

        if (location.pathname === "/merch" || location.pathname.includes("/product-details")) {

            header.style.backgroundColor = "#e13c33";
            navbar.style.backgroundColor = "#e13c33";

        }
        // else if (location.pathname === "/cart") {

        //     header.style.backgroundColor = "#fff";
        //     header.style.color = "#000"

        // }
        else {

            header.style.backgroundColor = "#000";
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
                        <NavLink to={"/"} className="logoLink">
                            <p>otroquest</p>
                        </NavLink>
                    </div>

                    <div className='navRight'>

                        <nav className={`navbar ${active ? 'active' : ''}`}>

                            <ul className='navMenu flex'>

                                <li>
                                    <NavLink
                                        to={"/stream"}
                                        className={'link'}
                                        onClick={() => {
                                            setActive(!active);
                                        }}
                                    >
                                        <span>stream</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to={"/videos"}
                                        className={'link'}
                                        onClick={() => { setActive(!active); }}
                                    >
                                        <span>videos</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/merch"}
                                        className={'link'}
                                        onClick={() => { setActive(!active); }}
                                    >
                                        <span>merch</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to={"/support"}
                                        className={'link'}
                                        onClick={() => { setActive(!active); }}
                                    >
                                        <span>support</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/blog"}
                                        className={'link'}
                                        onClick={() => { setActive(!active); }}
                                    >
                                        <span>blog</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/login"}
                                        className={'link'}
                                        onClick={() => { setActive(!active); }}
                                    >
                                        <span>login</span>
                                    </NavLink>
                                </li>
                            </ul>


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
                            <NavLink
                                to={"/cart"}
                                className={`link`}
                            >
                                <span className='flex'>
                                    <PiShoppingCartSimpleFill />
                                </span>
                            </NavLink>
                        </div>


                    </div>

                </div>

            </header >

        </>
    )
}

export default Navbar