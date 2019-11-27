import React, {Component} from 'react'

class NotFound extends Component {

    goHome() {
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <h1> Sorry! Page not found! </h1>
                <p onClick={() => this.goHome()}> Click here to redirect back to my home page!</p>
            </div>
        )
    }
}

export default NotFound