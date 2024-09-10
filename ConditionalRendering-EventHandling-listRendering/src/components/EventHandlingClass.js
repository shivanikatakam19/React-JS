import React, { Component } from 'react'

export class EventHandling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'displaying state',
            isToggleOn: true
        }

        this.handleClick = this.handleClick.bind(this)
    }
    buttonClick() {
        alert('Button Clicked')
        return false;
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div className='d-grid'>
                <h4>Using Class Component</h4>
                <button className='me-1 mb-2' onClick={this.buttonClick} >Click {this.props.name}!</button>
                <button className='mb-2' onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                <h6>{this.state.name}</h6>
            </div>
        )
    }
}

export default EventHandling
