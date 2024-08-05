import React from "react"
import airbnbLogo from "../images/airbnb-logo.png"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function Navbar() {

    function onImageHover() {
        alert('Welcome to Airbnb !')
    }

    return (
        <div>
            <nav className="navbar">
                <img className="airbnb-logo" src={airbnbLogo} onMouseOver={onImageHover} />
            </nav>
        </div>
    )
}