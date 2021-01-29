import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
// import AppBar from '@material-ui/core/AppBar'

export const NavBar = (props) => {
    return (
        // <AppBar position="sticky">
            <ul className="navbar" position="fixed-top">

                {/* <li className="navbar__item active">
                    <Link className="navbar__link" to="/">Home</Link>
                </li> */}

                <li className="navbar__item active">
                    <Link className="navbar__link" to="/puzzles">Gallery</Link>
                </li>
                
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/relationships">Space</Link>
                </li>
                
                {/* <li className="navbar__item active">
                    <Link className="navbar__link" to="/stats">Stats</Link>
                </li> */}
                
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/logout">Logout</Link>
                </li>

            </ul>
        // </AppBar>
    )
}
    