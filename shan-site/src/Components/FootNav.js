import HomeLogo from '../assets/HomeLogo.png'

import React from 'react'

const FootNavStyle = {
    backgroundColor: "transparent",
    borderTopStyle: "solid",
    borderTopWidth: "3px",
    borderTopColor: "black",
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
    height: "5vh",
    display: "flex",
    alignItems: "center"
}

const Projects = {
    order: "2",
    height: "5vh",
    display: "flex",
    alignItems: "center"
}

const Home = {
    order: "3",
    height: "5vh",
    display: "flex",
    alignItems: "center"
}

const WorkExperience = {
    order: "4",
    height: "5vh",
    display: "flex",
    alignItems: "center"
}

const Volunteer = {
    order: "5",
    height: "5vh",
    display: "flex",
    alignItems: "center"
}

const buttonStyle = {
    height: "4vh",
    width: "10vh",
    border: 0,
    backgroundColor: "transparent",
    fontWeight: 800,
}

const background = {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "gray",
    opacity: ".5",
    zIndex: "-1",
}

const FootNav = () => {
    return (
        <div style={FootNavStyle}>
            <div style={background}></div>
            <div style={AboutMe}>
                <button style={buttonStyle} onClick={() => { document.getElementById('AboutMe').scrollIntoView({ behavior: "smooth" }) }}>
                    About Me
                </button>
            </div>
            <div style={Projects}>
                <button style={buttonStyle} onClick={() => { document.getElementById('Projects').scrollIntoView({ behavior: "smooth" }) }}>
                    My Projects
                </button>
            </div>
            <div style={Home}>
                <img style={{ height: "5vh", width: 'auto' }} src={HomeLogo} onClick={() => { document.getElementById('Home').scrollIntoView({ behavior: "smooth" }) }} alt="Home logo" />
            </div>
            <div style={WorkExperience}>
                <button style={buttonStyle} onClick={() => { document.getElementById('WorkExperience').scrollIntoView({ behavior: "smooth" }) }}>
                    Work Experience
                </button>
            </div>
            <div style={Volunteer}>
                <button style={buttonStyle} onClick={() => { document.getElementById('Volunteer').scrollIntoView({ behavior: "smooth" }) }}>
                    Volunteer Experience
                </button>
            </div>
        </div>
    )
}

export default FootNav;