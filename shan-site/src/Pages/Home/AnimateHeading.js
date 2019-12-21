import React, { Component } from 'react'
import './Home.css'

class AnimateHeading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showText: '',
            forward: true,
            startIndex: 0,
        }

    }

    componentDidMount() {
        this.setState((prevState) => ({ showText: this.props.headingText.substring(0, prevState.startIndex + 1) }))
        this.animate(this.state.startIndex)
    }

    animate(n) {
        //display full text
        if (n === this.props.headingText.length) {
            this.setState({ forward: false })
            setTimeout(() => this.updateShowText(n), 2000)
        }
        //display hi
        else if (n === this.state.startIndex) {
            this.setState({ forward: true })
            setTimeout(() => this.updateShowText(n), 1000)
        }
        else if (n < this.props.headingText.length) {
            setTimeout(() => this.updateShowText(n), 100)
        }
    }

    updateShowText(n) {
        var updateText = this.props.headingText.substring(0, n + 1)
        this.setState({ showText: updateText })
        if (this.state.forward)
            this.animate(n + 1)
        else
            this.animate(n - 1)
    }


    render() {
        return (
            <div className="AnimatedCursor">
                {this.state.showText}
            </div>
        )
    }
}

export default AnimateHeading