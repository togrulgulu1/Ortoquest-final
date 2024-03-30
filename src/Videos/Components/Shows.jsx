import React from 'react'
import ShowsVideos from './ShowsVideos'
import videos from "../../video.json"
import "../assets/css/shows.css"

const Shows = () => {
    return (
        <section id='shows'>

            <div className="con flex">

                <div className="showsMain">

                    <div className="showsHead">
                        <h1>OtroQuest Shows</h1>
                    </div>

                    <ShowsVideos videos={videos}/>

                </div>

            </div>

        </section>
    )
}

export default Shows