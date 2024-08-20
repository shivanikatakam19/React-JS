import React from "react"
import Navbar1 from "./components/Navbar"
import Meme from "./components/Meme"

export default function App() {
    return (
        <div className="d-flex justify-content-center mt-2">
            <div className="main-container">
                <Navbar1 />
                <Meme meme="king ji" />
            </div>
        </div>
    )
}