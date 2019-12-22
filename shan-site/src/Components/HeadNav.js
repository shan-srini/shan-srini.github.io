import React from 'react';
import ShanLogo from '../assets/ShanLogo.png'
import GithubLogo from '../assets/GitHubLogo.png'

const NavBarStyle = {
    backgroundColor: "black",
    overflowY: "hidden",
    height: "7vh"
}

const LogoStyle = {
    position: "relative",
    left: "3%",
    top: "2vh",
    height: "25px",
}

const GithubLogoStyle = {
    position: "relative",
    left: "90%",
    top: "-1vh",
    height: "25px",
}

const EmailLogoStyle = {
    position: "relative",
    left: "80%",
    top: "-1vh",
    height: "25px",
}

class HeadNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    copyMyEmail() {
        navigator.clipboard.writeText("srinivasan.sha@husky.neu.edu")
    }

    render() {
        return (
            // <div style={this.state.visible ? sectionIsVisible : section}>
            <div>
                <div style={NavBarStyle}>
                    <div style={LogoStyle}>
                        <img style={{ height: "100%" }} src={ShanLogo} alt="Shan logo" />
                    </div>
                    <a style={GithubLogoStyle} href="https://github.com/shan-srini" target="__blank">
                        <img style={{ height: "25px" }} src={GithubLogo} alt="GitHub Link" />
                    </a>
                    <img style={EmailLogoStyle} onClick={this.copyMyEmail} src={GithubLogo} alt="GitHub Link" />
                </div>
            </div>
        )
    }
}

export default HeadNav;