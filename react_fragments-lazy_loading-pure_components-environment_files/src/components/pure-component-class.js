// designed to optimize the performance by using "shouldComponentUpdate" method
// this method is called only when the props are changed for the component
// it will compare the previous and current values of props and if they are not same the component will be updated
// suitable only when the components are depend upon props and state

import { PureComponent } from 'react'

export default class Greetings extends PureComponent {
    render() {
        console.log("pure class component", new Date().toLocaleString());
        return <div>Hello, {this.props.name}!</div>
    }
}