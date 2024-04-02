import React, { useRef } from 'react'
import "../assets/css/featured.css"
import Video from './Video'
import videos from "../../../video.json"


const Featured = () => {

    // let imgDivs = useRef([])
    // let playBtns = useRef([])

    // const handleClick = (index) => {
    //     imgDivs.current[index].style.opacity = "0"
    //     imgDivs.current[index].style.zIndex = "-5"
    //     playBtns.current[index].style.opacity = "0"
    //     playBtns.current[index].style.zIndex = "-5"

    // }

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