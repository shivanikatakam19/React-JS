import { useState } from "react";

export default function MouseCoordinates({ render }) {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    function handleMouseMove(event) {
        setCoordinates({ x: event.clientX, y: event.clientY })
    }

    return (
        <div>
            <div onMouseMove={handleMouseMove}>Move the Cursor on this label</div>
            {render({ coordinates })}
        </div>
    )
}