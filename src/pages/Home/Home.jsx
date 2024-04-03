import React  from 'react'
import Content from './Components/Content'
import Upcoming from './Components/Upcoming'
import Featured from './Components/Featured'
import videos from '../../video.json'
import Shop from './Components/Shop'
import Exclusive from './Components/Exclusive'





const Home = () => {


    return (
        <>

            <Content />
            <Upcoming />
            <Featured videos={videos} />
            <Shop />
            <Exclusive />

        </>
    )
}

export default Home