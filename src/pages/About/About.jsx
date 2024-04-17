import React from 'react'
import "./assets/css/about.css"
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section id='about'>
            <div className="con flex">

                <div className="aboutMain">

                    <div className="aboutLeft">
                        <h1>About OtroQuest</h1>
                        <p>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. </p>
                        <p>Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.</p>
                        <Link to={"https://www.linkedin.com/in/togrulquluyev/"} target='_blank' className='aboutLink'>
                            <span>Get in touch →</span>
                        </Link>
                    </div>

                    <div className="aboutRight">

                    </div>

                </div>

            </div>
        </section>
    )
}

export default About