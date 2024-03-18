import React from 'react'
import "./css/login.css"

const Login = () => {
    return (
        <>

            <div className="loginSec flex">
                <h3>Welcome to OTROQUEST</h3>
                <form className='flex' action="#">

                    <input type="email" name="" id="" placeholder='Email' required="required"/>

                    <input type="password" name="" id="" placeholder='Password' required="required"/>

                    <button>Log In</button>

                </form>
                <div className='loginFooter'>
                    <span>Forgot Password ?</span>
                    <span>Create Account</span>
                </div>
            </div>

        </>
    )
}

export default Login