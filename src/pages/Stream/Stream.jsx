import React from 'react'
import Preview from './Components/Preview'
import videos from '../../video.json'
import Streams from './Components/Streams'


const Stream = () => {
    return (
        <>

            <Preview videos={videos} />
            <Streams />

        </>
    )
}

export default Stream