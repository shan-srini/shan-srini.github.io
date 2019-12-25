import HomeLogo from '../assets/HomeLogo.png'

import React from 'react'

const FootNavStyle = {
    backgroundColor: "teal",
    width: "100%",
    height: "5vh",
    overflowY: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
}

const AboutMe = {
    order: "1",
}

const Projects = {
    order: "2",
}

const Home = {
    order: "3",
}

const WorkExperience = {
    order: "4",
}

const Volunteer = {
    order: "5",
}

const FootNav = () => {
    return (
        <div style={FootNavStyle}>
            <div className={AboutMe}>
                <button onClick={() => { document.getElementById('AboutMe').scrollIntoView({ behavior: "smooth" }) }}>
                    About Me
                </button>
            </div>
            <div style={Projects}>
                <button onClick={() => { document.getElementById('Projects').scrollIntoView({ behavior: "smooth" }) }}>
                    Projects
                </button>
            </div>
            <div style={Home}>
                <img style={{ height: "5vh", width: 'auto' }} src={HomeLogo} onClick={() => { document.getElementById('Home').scrollIntoView({ behavior: "smooth" }) }} alt="Home logo" />
            </div>
            <div style={WorkExperience}>
                <button onClick={() => { document.getElementById('WorkExperience').scrollIntoView({ behavior: "smooth" }) }}>
                    Work Experience
                </button>
            </div>
            <div style={Volunteer}>
                <button onClick={() => { document.getElementById('Volunteer').scrollIntoView({ behavior: "smooth" }) }}>
                    Volunteer
                </button>
            </div>
        </div>
    )
}

export default FootNav;