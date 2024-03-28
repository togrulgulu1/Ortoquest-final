import React from "react";
import "../assets/css/upcoming.css"

const Upcoming = () => {
    return (
        <>

            <section id="upcoming">

                <div className="con flex">

                    <div className="upLeft">
                        <div className="leftDesc">
                            <p>Replace with an embed block and paste your streaming channel url.</p>
                        </div>
                    </div>

                    <div className="upRight">

                        <h2>Upcoming Streams</h2>

                        <div className="streamDiv flex">
                            <div className="streamTop">
                                <p>MON, AUG 17</p>
                                <span>Stream Link</span>
                            </div>

                            <div className="streamBottom">
                                <p>THUR, AUG 20</p>
                                <span>Stream Link</span>
                            </div>
                        </div>

                        <div className="streamBtn">
                            <button>full schedule</button>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Upcoming