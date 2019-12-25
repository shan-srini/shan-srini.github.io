import React from 'react'

import './PersonalSite.css'

import HeadNav from '../../Components/HeadNav/HeadNav'
import FootNav from '../../Components/FootNav'

import Home from '../Home/Home'

class PersonalSite extends React.Component {

    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (
            <div>
                <div className="Header">
                    <HeadNav />
                </div>
                <div id="Home">
                    <Home />
                </div>
                <div className="AboutMe" id="AboutMe">
                    This is about me
                </div>
                <div className="Projects" id="Projects">
                    These are my projects
                </div>
                <div className="WorkExperience" id="WorkExperience">
                    These are my Work Experiences
                </div>
                <div className="VolunteerExperience" id="Volunteer">
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