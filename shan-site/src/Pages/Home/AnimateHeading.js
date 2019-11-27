import React, {Component} from 'react'

class AnimateHeading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showText: ''
        }

    }

    componentDidMount() {
        this.animate(0)
    }

    animate(n) {
        if(n<this.props.headingText.length) {
            setTimeout(() => this.updateShowText(n+1), 50)
        }
        else {
            this.animate(0)
        }
    }

    updateShowText(n) {
        var updateText = this.props.headingText.substring(0, n)
        this.setState({showText: updateText})
        this.animate(n)
    }


    render() {
        return (
            <div>
                {this.state.showText}
            </div>
        )
    }
}

export default AnimateHeading