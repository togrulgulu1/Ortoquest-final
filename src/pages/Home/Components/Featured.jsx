import React, { useRef } from 'react'
import "../assets/css/featured.css"
import Video from './Video'
import videos from "../../../video.json"


const Featured = () => {

    return (
        <>

            <section id="featured">

                <div className="con flex">

                    <div className='featMain'>

                        <div className="featHead">
                            <h1>Featured Videos
                            </h1>
                        </div>

                        <Video videos={videos}/>

                    </div>

                </div>

            </section>

        </>
    )

}

export default Featured