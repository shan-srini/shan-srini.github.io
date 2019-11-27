import React, { Component } from 'react'
import AnimateHeading from './AnimateHeading'
import './Home.css'

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <div className="HeadingBox">
                    {/* <h1 className="HeadingAnimate"> Welcome! To Shan's Personal React Website </h1> */}
                    <AnimateHeading headingText="Hi! I'm Shanmukha Srinivasan, welcome to my site :)"/>
                </div>
                    
            </div>
        )
    }
}

export default Home