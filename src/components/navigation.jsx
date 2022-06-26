import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

const Navbar = () => {
    return (
        <div className="w-full">
            <nav className="w-full">
                <ul className="hidden sm:grid grid-rows-4 grid-flow-col gap-4">
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Guillermo Zaandam</Link></li>
                    <li><Link to="/">Blog posts</Link></li>
                </ul>

                <ul className="sm:hidden bg-gray-700 h-10">
                    <div className="space-y-2 py-2 px-2">
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
                    </div>
                </ul>
            </nav>
        </div>
    )
}



export default Navbar