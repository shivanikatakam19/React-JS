import React from "react";
import img from '../images/meme_god.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar-img" src={img} />
            <h4 className="text-light">Meme Generator</h4>
        </nav>
    )
}