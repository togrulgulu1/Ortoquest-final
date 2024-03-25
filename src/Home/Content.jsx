import React from 'react'
import "./css/content.css"

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
                            <button>
                                read more
                            </button>
                        </div>

                    </div>

                    <div className="headRight">

                        {/* <img width={620} src={image1} alt="" /> */}
                        <div data-aos="fade-right"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="1000"
                            className="image"
                        ></div>

                    </div>

                </div>
            </section>

        </>
    )

}

export default Content