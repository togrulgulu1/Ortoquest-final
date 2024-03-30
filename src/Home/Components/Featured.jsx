import React, { useRef } from 'react'
import "../assets/css/featured.css"
import Video from './Video'
import videos from "../../video.json"


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

                        {/* <div className="featDiv">

                            {videos.map((video, index) => {

                                return video.id < 7 ? (

                                    <div className='videoComp' key={video.id} id={video.id}>

                                        <img ref={el => imgDivs.current[index] = el} src={video.image} alt="" onClick={() => handleClick(index)} />

                                        <button ref={el => playBtns.current[index] = el} onClick={() => handleClick(index)}>
                                            <i className="fa-solid fa-play"></i>
                                        </button>


                                        <iframe src={video.src} frameBorder="0"></iframe>

                                        <p className='videoTitle'>{video.title}</p>

                                        <p className='videoDate'>{video.date}</p>

                                    </div>

                                ) : null;

                            })}

                        </div> */}

                    </div>

                </div>

            </section>

        </>
    )

}

export default Featured