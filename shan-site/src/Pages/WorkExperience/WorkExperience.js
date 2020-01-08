import React from 'react'
import './WorkExperience.css'

import WECarousel from './WECarousel/WECarousel'

export default class WorkExperience extends React.Component {

    render() {
        return (
            <div className="WorkExperience">
                <h1 className="HeaderWorkExperience">
                    My Work Experience!
                </h1>
                <div className="ResumeLink">
                    Click for my Resume!
                </div>

                <div id="Carousel">
                    <WECarousel />
                </div>
            </div>
        )
    }
}