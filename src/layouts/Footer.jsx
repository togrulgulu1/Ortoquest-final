import React from 'react'
import "./css/footer.css"
import { Link, NavLink } from 'react-router-dom';
import { IoLogoTwitch, IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <>

            <footer id='footer'>

                <div className="con flex">

                    <div className="explore">
                        <h3>Explore</h3>
                        <ul>
                            <li>
                                <Link className="footLink" to={"/stream"}>
                                    <span>stream</span>
                                </Link>
                            </li>

                            <li>
                                <Link className="footLink" to={"/videos"}>
                                    <span>videos</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="footLink" to={"/blog"}>
                                    <span>blog</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="support">
                        <h3>Support</h3>
                        <ul>
                            <li>
                                <Link className="footLink" to={"/merch"}>
                                    <span>merch</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="footLink" to={"/support"}>
                                    <span>support</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='footLink' to={"/about"}>
                                    <span>About</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="subscribe">
                        <h3>Stay in the loop</h3>
                        <input type="text" placeholder='Email Address' />
                        <button>Subscribe</button>
                    </div>

                    <div className="follow">

                        <h3>follow</h3>

                        <div className="followSoc">

                            <Link to={"https://www.twitch.tv/"} target='_blank' >
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

                    </div>

                    <div className="copyRight">

                        <span>© Made by </span>
                        <Link className='link' to={"https://www.linkedin.com/in/togrulquluyev/"} target='_blank'>
                            <span>TOGRULGULU</span>
                        </Link>

                    </div>

                </div>


            </footer>

        </>
    )
}

export default Footer