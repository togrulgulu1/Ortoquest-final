import React from 'react'
import "./css/footer.css"
import { Link } from 'react-router-dom';
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
                            <li>Stream</li>
                            <li>Videos</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className="support">
                        <h3>Support</h3>
                        <ul>
                            <li>Merch</li>
                            <li>support</li>
                            <li>About</li>
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

                        <span>© Made with </span>
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