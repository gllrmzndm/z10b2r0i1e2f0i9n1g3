import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

const Navbar = () => {
    return (
        <div className="w-full">
            <nav className="w-full border-2 border-orange-500">
                <ul className="hidden sm:flex items-center lg:justify-between space-x-10 mx-20 border-2 border-blue-600">
                    <li className="py-2 text-black hover:bg-orange-600 hover:text-white"><Link to="/">Guillermo Zaandam</Link></li>
                    <li className="py-2 "><Link to="/">About me</Link></li>
                    <li className="py-2 "><Link to="/">Articles</Link></li>
                    <li className="py-2 "><Link to="/">Projects</Link></li>
                </ul>

                <ul className="sm:hidden bg-gray-200 h-10 border-solid border-2 border-rose-600">
                    <div className="space-y-2 py-2 px-2">
                        <span className="block h-0.5 w-8 bg-gray-800"></span>
                        <span className="block h-0.5 w-8 bg-gray-800"></span>
                        <span className="block h-0.5 w-8 bg-gray-800"></span>
                    </div>
                </ul>
            </nav>
        </div>
    )
}



export default Navbar