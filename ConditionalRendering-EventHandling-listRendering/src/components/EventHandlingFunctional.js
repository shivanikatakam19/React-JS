import React, { useState } from 'react'

export default function EventHandlingFunctional(props) {

    const [isToggleOn, setIsToggleOn] = useState(false)

    function buttonClick() {
        alert('Button Clicked')
        return false;
    }

    function handleClick() {
        setIsToggleOn(!isToggleOn)
    }

    return (
        <div className='d-grid'>
            <h4>Using Functional Component</h4>
            <button className='me-1 mb-2' onClick={buttonClick} >Click {props.name}!</button>
            <button className='mb-2' onClick={handleClick}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
    )
}