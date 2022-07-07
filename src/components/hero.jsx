import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player/youtube'

let name = "Guillermo Zaandam"


const Hero = () => {
    return (
        <header className="grid grid-cols-1 relative">
            <div className="z-0 border-2 border-red-400">
                <StaticImage src="../images/guillermo.png" alt="Image of the agent Fade from Valorant" layout="fullWidth" placeholder="dominantcolor" />
                <p className="z-10 absolute inset-0 flex items-center justify-center text-gray-100 body-font font-ubuntu text-2xl">Hello I am {name}</p>
            </div>

            {/* <div className="player-wrapper pointer-events-none w-full">
                <ReactPlayer className='object-cover aspect-video' preload='true' playing='true' muted='true' loop='true' playsinline='true' width="100%"
                    height="100%" frameborder="0" url='https://youtu.be/7Xz8UdGFJDs' />
            </div> */}
        </header>
    )
}

export default Hero