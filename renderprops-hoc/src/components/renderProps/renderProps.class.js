// render props - techniques to share code between the components using a prop whose value is a function
// used when the functional logic is same but ui logic should be different for ex: data fetching 

import { Component } from "react";

export default class DataFetching extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            error: "",
            data: []
        }
    }

    componentDidMount() {
        fetch(this.props.url).then((res) => {
            if (!res.ok) throw new Error("Error fetching the response")
            this.setState({
                isLoading: false
            })
            return res.json()
        }).then((data) => {
            this.setState({
                isLoading: false,
                data: data
            })
        }).catch((err) => {
            this.setState({
                isLoading: false,
                error: "Cannot get the data"
            })
        })
    }

    render() {
        return (
            this.props.render(this.state)
        )
    }
}