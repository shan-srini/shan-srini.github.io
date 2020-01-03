import React from 'react'
import LazyLoad from 'react-lazyload'

import './PersonalSite.css'

import HeadNav from '../../Components/HeadNav/HeadNav'
import FootNav from '../../Components/FootNav'

import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'

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
                <div classname="Home" id="Home">
                    <LazyLoad>
                        <Home />
                    </LazyLoad>
                </div>

                <div className="AboutMe" id="AboutMe">
                    <LazyLoad unmountIfInvisible>
                        <AboutMe />
                    </LazyLoad>
                </div>


                <div className="Projects" id="Projects">
                    <LazyLoad>
                        <Projects />
                    </LazyLoad>
                </div>


                <div className="WorkExperience" id="WorkExperience">
                    <LazyLoad>
                        These are my Work Experiences
                    </LazyLoad>
                </div>

                <div className="VolunteerExperience" id="Volunteer">
                    <LazyLoad>
                        These are my Volunteer Experiences
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