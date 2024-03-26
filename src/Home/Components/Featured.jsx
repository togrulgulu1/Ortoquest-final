import React, { useRef } from 'react'
import "../css/featured.css"


const Featured = ({ videos }) => {

    let imgDivs = useRef([])
    let playBtns = useRef([])

    const handleClick = (index) => {
        imgDivs.current[index].style.opacity = "0"
        playBtns.current[index].style.opacity = "0"
    }

    return (
        <>

        {/* VIDEOLAR OXUNMUR !!! */}

            <section id="featured">

                <div className="con flex">

                    <div className='featMain'>

                        <div className="featHead">
                            <h1>Featured Videos
                            </h1>
                        </div>

                        <div className="featDiv">

                            {videos.map((video, index) => {

                                return (

                                    <div className='videoComp' key={video.id} id={video.id}>

                                        <img ref={el => imgDivs.current[index] = el} src={video.image} alt="" onClick={() => handleClick(index)} />

                                        <button ref={el => playBtns.current[index] = el} onClick={() => handleClick(index)}>
                                            <i class="fa-solid fa-play"></i>
                                        </button>


                                        <iframe src={video.src} frameborder="0"></iframe>

                                        <p className='videoTitle'>{video.title}</p>

                                        <p className='videoDate'>{video.date}</p>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </div>

            </section>

        </>
    )

}

export default Featured