import React from 'react'
import LazyLoad from 'react-lazyload'

import './PersonalSite.css'

import HeadNav from '../../Components/HeadNav/HeadNav'
import FootNav from '../../Components/FootNav'

import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import WorkExperience from '../WorkExperience/WorkExperience'
import VolunteerExperience from '../VolunteerExperience/VolunteerExperience'

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
                <div className="Home" id="Home">
                    <LazyLoad>
                        <Home />
                    </LazyLoad>
                </div>

                <div className="AboutMe" id="AboutMe">
                    <LazyLoad unmountIfInvisible scroll>
                        <AboutMe />
                    </LazyLoad>
                </div>


                <div className="Projects" id="Projects">
                    <LazyLoad unmountIfInvisible scroll>
                        <Projects />
                    </LazyLoad>
                </div>


                <div className="WorkExperience" id="WorkExperience">
                    <LazyLoad unmountIfInvisible scroll>
                        <WorkExperience />
                    </LazyLoad>
                </div>

                <div className="VolunteerExperience" id="Volunteer">
                    <LazyLoad unmountIfInvisible scroll>
                        <VolunteerExperience />
                    </LazyLoad>
                </div>

                <div className="Footer">
                    <FootNav />
                </div>
            </div >
        )
    }
}

export default PersonalSite;