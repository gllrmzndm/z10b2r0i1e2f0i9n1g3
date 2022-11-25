import * as React from "react"
import Navbar from "../components/navigation"
import GatsbyConfigSeo from "../components/seo"
import Hero from "../components/hero.jsx"

import { StaticImage } from "gatsby-plugin-image"
import Banner2 from "../images/ti.jpg"


const IndexPage = () => {

  return (
    <div>
      <GatsbyConfigSeo title="Guillermo Zaandam" image={Banner2}></GatsbyConfigSeo>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  )
}

export default IndexPage