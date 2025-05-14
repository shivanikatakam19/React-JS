import { Component } from 'react'

function WithCounter(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }

            this.increment = this.increment.bind(this)
            this.decrement = this.decrement.bind(this)
            this.reset = this.reset.bind(this)
        }

        increment() {
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        };

        decrement() {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        };

        reset() {
            this.setState(prevState => ({
                count: 0
            }))
        };

        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    increment={this.increment}
                    decrement={this.decrement}
                    reset={this.reset}
                    {...this.props} />
            )
        }
    }
}

const Counter = ({ count, increment, decrement, reset }) => {
    return (
        <div className="container">
            <h2 className="title">Counter App</h2>
            <div className="count">{count}</div>
            <div className="buttons">
                <button onClick={increment} className="btn">+</button>
                <button onClick={decrement} className="btn">-</button>
                <button onClick={reset} className="btn reset">Reset</button>
            </div>
        </div>

    )
}

export const NumberCounter = WithCounter(Counter)
