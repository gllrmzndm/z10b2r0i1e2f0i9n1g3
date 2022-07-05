import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

let name = "Guillermo Zaandam"


const Hero = () => {
    return (
        <div className="grid grid-cols-1 relative">
            <div className="z-0">
                <StaticImage src="../images/guillermo.png" alt="Image of the agent Fade from Valorant" layout="fullWidth" />
            </div>
                <p className="z-10 absolute inset-0 flex items-center justify-center text-gray-50 text-xl">Hello I am {name}</p>
        </div>
    )
}

export default Hero