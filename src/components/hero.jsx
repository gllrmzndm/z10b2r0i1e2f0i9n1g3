import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import ReactPlayer from 'react-player/youtube'

let name = "Guillermo Zaandam"


const Hero = () => {
    return (
        <header className="grid grid-cols-1 relative font-roboto">

            <div className="z-0 h-screen border-2 border-green-400 relative">
                <StaticImage className="h-screen md:h-[215vh]" src="../images/guillermo.png" alt="Image of Guillermo Zaandam himself" layout="fullWidth" placeholder="dominantcolor" />
                <p className="z-10 absolute inset-0 flex items-center justify-center text-gray-100 text-2xl">Hello, I am {name}</p>
                <p className="z-10 absolute inset-0 flex mt-96 justify-center text-orange-400 text-2xl">Software Engineer</p>
                <button className="z-10 absolute flex items-center justify-center rounded inset-x-20 py-2 bottom-32 border-2 md:inset-x-60 border-blue-200 bg-orange-400 text-white">See Who I'M</button>
            </div>

            <div className="z-0 h-3/5 border-2 relative md:grid grid-cols-2 border-purple-400 font-roboto bg-slate-400">
                <StaticImage className="h-screen md:h-[115vh]" src="../images/guillermo.png" alt="Image of Guillermo Zaandam himself" layout="fullWidth" placeholder="dominantcolor" />
                <p className="z-10 absolute inset-0 flex items-center justify-center text-gray-100 text-2xl">Hello, I am {name}</p>
                <p className="z-10 absolute inset-0 flex mt-96 justify-center text-orange-400 text-2xl">Software Engineer</p>
                <button className="z-10 absolute flex items-center justify-center rounded inset-x-20 py-2 bottom-32 border-2 font-roboto md:inset-x-60 border-blue-200 bg-orange-400 text-white">See Who I'M</button>
            </div>

            {/* <div className="player-wrapper pointer-events-none w-full">
                <ReactPlayer className='object-cover aspect-video' preload='true' playing='true' muted='true' loop='true' playsinline='true' width="100%"
                    height="100%" frameborder="0" url='https://youtu.be/7Xz8UdGFJDs' />
            </div> */}
        </header>
    )
}

export default Hero