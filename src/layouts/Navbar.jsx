import React, { useState, useEffect } from 'react'
import "./css/navbar.css"
import { IoLogoTwitch, IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const [active, setActive] = useState(false)

    const count = useSelector((state) => state.cart.cartTotalQuantity)

    const click = () => {
        setActive(!active)
    }

    const closeMenu = () => {
        if (active) {
            setActive(false)
        }
    }


    let location = useLocation();

    useEffect(() => {

        const barsColorToBlack = () => {

            const bars = document.querySelectorAll('.burgerMenu span');
            bars.forEach(bar => {
                bar.style.backgroundColor = '#000';
            });

        }

        const barsColorToWhite = () => {

            const bars = document.querySelectorAll('.burgerMenu span');
            bars.forEach(bar => {
                bar.style.backgroundColor = '#fff';
            });

        }

        const changeColorToBlack = () => {
            const elements = document.querySelectorAll('#header span, #header p, .navbar span, .navbar p, .navbar .link');
            elements.forEach(element => {
                element.style.color = '#000';
            });
        };

        const changeColorToWhite = () => {
            const elements = document.querySelectorAll('#header span, #header p, .navbar span, .navbar p, .navbar .link');
            elements.forEach(element => {
                element.style.color = '#fff';
            });
        };

        const header = document.querySelector("#header")
        const navbar = document.querySelector(".navbar")

        if (location.pathname === "/merch" ||
            location.pathname.includes("/product-details") ||
            location.pathname.includes("/cart")) {

            header.style.backgroundColor = "#e13c33";
            navbar.style.backgroundColor = "#e13c33";
            changeColorToWhite()
            barsColorToWhite()

        } else if (location.pathname === "/about") {

            header.style.backgroundColor = "#e4e4e4";
            navbar.style.backgroundColor = "#e4e4e4";
            changeColorToBlack()
            barsColorToBlack()

        } else {

            header.style.backgroundColor = "#000";
            navbar.style.backgroundColor = "#000";
            changeColorToWhite()
            barsColorToWhite()

        }

    }, [location.pathname])

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
                        <NavLink to={"/"} className="logoLink" onClick={closeMenu}>
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
                                        onClick={() => { setActive(!active); }}
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
                                onClick={closeMenu}
                            >
                                <span className='flex'>
                                    <PiShoppingCartSimpleFill />
                                </span>
                                <span>{count}</span>
                            </NavLink>
                        </div>


                    </div>

                </div>

            </header >

        </>
    )
}

export default Navbar