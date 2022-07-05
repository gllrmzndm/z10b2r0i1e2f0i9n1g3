import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"


const Hero = () => {
    return (
        <div>
            <StaticImage src="../images/fade2.jpg" alt="Image of the agent Fade from Valorant" />
        </div>
    )
}

export default Hero