import React from 'react'
import "../assets/css/streams.css"

const Streams = () => {
    return (
        <section id='streams'>

            <div className="con flex">

                <div className="streamMain">

                    <div className="streamHead">
                        <h1>Upcoming Streams</h1>
                    </div>

                    <div className="streamDate flex">

                        <div className="date1">
                            <h4>MON, AUG 17 <br />AT 11PM</h4>
                            <p>Stream Name + Link Goes Here</p>
                        </div>
                        <div className="date2">
                            <h4>THUR, AUG 20 <br />AT 11PM</h4>
                            <p>Stream Name + Link Goes Here</p>
                        </div>
                        <div className="date3">
                            <h4>SAT, AUG 22 <br />AT 11PM</h4>
                            <p>Stream Name + Link Goes Here</p>
                        </div>
                        <div className="date4">
                            <h4>WED, AUG 26 <br />AT 11PM</h4>
                            <p>Stream Name + Link Goes Here</p>
                        </div>
                        <div className="date5">
                            <h4>SAT, AUG 29 <br />AT 11PM</h4>
                            <p>Stream Name + Link Goes Here</p>
                        </div>
                        <div className="date6">
                            <h4>TUE, SEPT 1 <br />AT 11PM</h4>
                            <p>Stream Name + Link Goes Here</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Streams