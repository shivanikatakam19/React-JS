import React from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Card from "./components/Card"
import data from './data'
import ConditionalRendering from "./components/ConditionalRendering"
import EventHandling from "./components/EventHandlingClass"
import EventHandlingFunctional from "./components/EventHandlingFunctional"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div className="d-flex justify-content-center">
            <div className="main-container">
                <Navbar />
                <Content />
                <div className="airbnb--cards">
                    {data.map(card => (
                        <Card
                            key={card.id}
                            item={card} />
                    ))}
                </div>
            </div>
            <div className="ms-2 d-grid align-content-center">
                <ConditionalRendering isLoggedIn={true} />
                <EventHandling name="me" />
                <EventHandlingFunctional name="me" />
            </div>
        </div>
    )
}