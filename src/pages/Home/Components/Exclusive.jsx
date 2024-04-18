import React from 'react'
import "../assets/css/exclusive.css"
import { Link } from 'react-router-dom'

const Exclusive = () => {
    return (
        <>

            <section id='exclusive'>

                <div className="con flex">

                    <div className="excLeft">
                        <h2>OtroQuest Exclusives</h2>
                        <p>Get exclusive access to early releases, exclusive streams, and behind the scenes content when you show your support.</p>
                        <Link to={"/support"}>
                        <button>get access</button>
                        </Link>
                    </div>

                    <div className="excRight">

                    </div>

                </div>

            </section>

        </>
    )
}

export default Exclusive