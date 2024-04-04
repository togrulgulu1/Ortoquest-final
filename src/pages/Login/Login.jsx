import React from 'react'
import "./assets/css/login.css"
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Login = () => {
    return (
        <section id='login'>
            <div className="con flex">

                <div className="loginMain">

                    <div className="loginHead">
                        <h1>Welcome to OTROQUEST</h1>
                    </div>

                    <div className='loginDiv'>

                        <div className="formDiv">

                            <form className='flex' action="#">

                                <input type="email" placeholder='Email Addres' required />
                                <input type="password" placeholder='Password' required />
                                <button>sign in</button>

                            </form>


                        </div>

                        <div className='slash'>/</div>

                        <div className="or">Or</div>

                        <div className="loginOther">

                            <Link className='loginLink' to={"https://mail.google.com"}>
                                <button><FaGoogle /> <span>Sign in with Google</span></button>
                            </Link>

                            <Link className='loginLink' to={"https://www.facebook.com/"}>
                                <button><FaFacebookF /> <span>Sign in with Facebook</span></button>
                            </Link>

                            <Link className='loginLink' to={"https://www.icloud.com/"}>
                                <button><FaApple /> <span>Sign in with Apple</span></button>
                            </Link>

                        </div>

                    </div>

                    <div className="loginFoot">

                        <Link className='forgotLink' to={"/forgot-password"}>
                            <span>Forgot Password ?</span>
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Login