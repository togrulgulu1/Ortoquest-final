import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/preview.css"

const Preview = ({ videos }) => {

    let imgDivs = useRef([])
    let playBtns = useRef([])

    const handleClick = (index) => {
        imgDivs.current[index].style.opacity = "0"
        imgDivs.current[index].style.zIndex = "-5"
        playBtns.current[index].style.opacity = "0"
        playBtns.current[index].style.zIndex = "-5"

    }

    return (

        <section id='preview'>

            <div className="con flex">

                <div className="preLeft">

                    {videos.map((video, index) => {

                        return video.id < 2 ? (

                            <div className="videoPre" key={video.id} id={video.id}>

                                <img ref={el => imgDivs.current[index] = el} src={video.image} alt="" onClick={() => handleClick(index)} />

                                <button ref={el => playBtns.current[index] = el} onClick={() => handleClick(index)}>
                                    <i className="fa-solid fa-play"></i>
                                </button>


                                <iframe src={video.src} frameborder="0"></iframe>
                            </div>

                        ) : null;
                    })}

                </div>

                <div className="preRight">

                    <h1>Exclusive Preview of The First of Them III </h1>
                    <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
                    </p>
                    <Link to={"https://www.twitch.tv/"} target='_blank'>

                        <button>stream now</button>
                    </Link>

                </div>

            </div>


        </section>

    )
}

export default Preview