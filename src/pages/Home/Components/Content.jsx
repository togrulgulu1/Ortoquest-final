import React from 'react'
import "../assets/css/content.css"
import { Link } from 'react-router-dom'

const Content = () => {

    return (
        <>

            <section id='content'>

                <div className="con flex">

                    <div className="headLeft">

                        <div className="date">
                            <strong>3/11/19</strong>
                            <span>RELEASE REVIEW</span>
                        </div>

                        <div className="contentHead">
                            <h1>Game Review: Skytar Wins In Storytelling</h1>
                        </div>

                        <div className="contentBtn">
                            <Link to={"/blog"}>
                                <button>read more</button>
                            </Link>
                        </div>

                    </div>

                    <div className="headRight">

                        <div className="image"></div>

                    </div>

                </div>

            </section>

        </>
    )

}

export default Content