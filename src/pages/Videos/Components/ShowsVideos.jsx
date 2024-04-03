import React, { useRef } from 'react'
import '../assets/css/showsVideos.css'

const ShowsVideos = ({ videos }) => {

    let imgDivs = useRef([])
    let playBtns = useRef([])

    const handleClick = (index) => {
        imgDivs.current[index].style.opacity = "0"
        imgDivs.current[index].style.zIndex = "-5"
        playBtns.current[index].style.opacity = "0"
        playBtns.current[index].style.zIndex = "-5"

    }

    return (
        <>

            <div className="showsVideosDiv">

                {videos.map((video, index) => {

                    return video.id > 6 ? (

                        <div className='showsVideosComp' key={video.id} id={video.id}>

                            <img ref={el => imgDivs.current[index] = el} src={video.image} alt="" onClick={() => handleClick(index)} />

                            <button ref={el => playBtns.current[index] = el} onClick={() => handleClick(index)}>
                                <i className="fa-solid fa-play"></i>
                            </button>


                            <iframe src={video.src} frameBorder="0"></iframe>

                            <p className='showsVideosTitle'>{video.title}</p>

                            <p className='showsVideosDesc'>{video.desc}</p>

                        </div>

                    ) : null;

                })}

            </div>

        </>
    )
}

export default ShowsVideos