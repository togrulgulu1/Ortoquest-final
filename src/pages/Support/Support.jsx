import React from 'react'
import "./assets/css/support.css"

const Support = () => {
    return (
        <section id='support'>
            <div className="con flex">

                <div className="supportMain">

                    <div className='sendTip flex'>
                        <h2>Send a tip</h2>
                        <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. </p>
                        <button>donate</button>
                    </div>

                    <div className='become flex'>
                        <h2>Become a member</h2>
                        <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. </p>
                        <button>Join now</button>
                    </div>

                    <div className='subs flex'>
                        <h2>Subscribe to streams</h2>
                        <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. </p>
                        <button>subscribe</button>
                    </div>

                    <div className='cheer flex'>
                        <h2>Cheer with bits</h2>
                        <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. </p>
                        <button>cheer</button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Support