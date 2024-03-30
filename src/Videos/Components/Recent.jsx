import React,{useRef} from 'react'
import "../assets/css/recent.css"
import videos from "../../video.json"
import Video from '../../Home/Components/Video'

const Recent = () => {

    return (

        <section id='recent'>

            <div className="con flex">

                <div className='recentMain'>

                    <div className="recentHead">
                        <h1>Recent Videos & Past Streams
                        </h1>
                    </div>

                    <Video videos={videos}/>

                </div>

            </div>

        </section>
    )
}

export default Recent