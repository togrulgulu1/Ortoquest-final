import React from 'react'
import Content from './Components/Content'
import Upcoming from './Components/Upcoming'
import Featured from './Components/Featured'
import videos from '../video.json'
import Shop from './Components/Shop'
// import images from '../image.json' 

const Home = () => {
    return (
        <>

            <Content />
            <Upcoming />
            <Featured videos={videos} />
            <Shop />

        </>
    )
}

export default Home