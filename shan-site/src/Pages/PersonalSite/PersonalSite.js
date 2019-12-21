import React from 'react'

import './PersonalSite.css'

import HeadNav from '../../Components/HeadNav'
import FootNav from '../../Components/FootNav'

import Home from '../Home/Home'

class PersonalSite extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="Header">
                    <HeadNav />
                </div>
                <div id="Home">
                    <Home />
                </div>
                <div style={{ height: "100vh" }} id="AboutMe">
                    This is about me
                </div>
                <div style={{ height: "100vh" }} id="Projects">
                    These are my projects
                </div>
                <div style={{ height: "100vh" }} id="WorkExperience">
                    These are my Work Experiences
                </div>
                <div style={{ height: "100vh" }} id="Volunteer">
                    These are my Volunteer Experiences
                </div>
                <div className="Footer">
                    <FootNav />
                </div>
            </div >
        )
    }
}

export default PersonalSite;