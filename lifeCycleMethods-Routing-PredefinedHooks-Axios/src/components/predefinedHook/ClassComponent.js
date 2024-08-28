import { Component, getDerivedStateFromProps, componentDidCatch } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            userData: []
        }

        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.someValue !== prevState.someValue) {
            return { someState: nextProps.someValue };
        }
        return null;
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
            this.setState({
                ...this.state,
                userData: data,
            })
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState != this.state.userData;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.userData.length > 0) {
            return this.state
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            window.alert('component updated')
        }
    }

    componentWillUnmount() {
        console.log('component unmounted', this.state)
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        logComponentStackToMyService(info.componentStack);
    }

    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <>
                <h2>Class Component</h2>
                <>
                    <div>Count: {this.state.count}</div>
                    <button onClick={() => this.increment()}>+</button>
                    <button onClick={() => this.decrement()}>-</button>
                </>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userData.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.state.hasError && <h1>Error Occured</h1>}
            </>
        )
    }

}

export default ClassComponent