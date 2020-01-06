import React from 'react';
import ShanLogo from '../../assets/ShanLogo.png'
import GithubLogo from '../../assets/GitHubLogo.png'
import EmailLogo from '../../assets/EmailLogo.png'
import LinkedInLogo from '../../assets/LinkedInLogo.png'

import './HeadNav.css'

const NavBarStyle = {
    backgroundColor: "black",
    overflow: "hidden",
    height: "7vh"
}

const ShanLogoStyle = {
    position: "relative",
    left: "3%",
    top: "1vh",
    height: "40px",
}

const LinksStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "top",
    overflow: "hidden",
    width: "30%",
    height: "75%",
    position: "relative",
    left: "70%",
    top: "-45%",
}

const GithubLogoStyle = {
    height: "25px",
}

const EmailLogoStyle = {
    height: "25px",
}

const LinkedInLogoStyle = {
    height: "25px",
}

class HeadNav extends React.Component {
    constructor(props) {
        super(props)
        this.copyMyEmail = this.copyMyEmail.bind(this)
        this.displayToast = this.displayToast.bind(this)
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            toastVisible: false,
        };
    }

    //display Toast for 3 seconds
    displayToast() {
        this.setState({ toastVisible: true })
        setTimeout(() => {
            this.setState({ toastVisible: false })
        }, 2700);
    }

    copyMyEmail() {
        // navigator.clipboard.writeText("srinivasan.sha@husky.neu.edu");
        this.copyStringToClipboard("srinivasan.sha@husky.neu.edu")
        this.displayToast()
    }

    //copied from online, creates temp element, copies contents, deletes element
    copyStringToClipboard(str) {
        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = str;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = { position: 'absolute', left: '-9999px' };
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
    }

    render() {
        return (
            <div>
                <div style={NavBarStyle}>
                    <div style={ShanLogoStyle}>
                        <img style={{ height: "100%" }} src={ShanLogo} alt="Shan logo" />
                    </div>
                    <div style={LinksStyle}>
                        <a style={GithubLogoStyle} href="https://github.com/shan-srini" target="__blank">
                            <img style={{ height: "25px" }} src={GithubLogo} alt="GitHub Link" />
                        </a>
                        <a style={LinkedInLogoStyle} href="https://www.linkedin.com/in/srinishan/" target="__blank">
                            <img style={{ height: "25px" }} src={LinkedInLogo} alt="LinkedIn Link" />
                        </a>
                        <img style={EmailLogoStyle} onClick={this.copyMyEmail} src={EmailLogo} alt="Copy my Email" />
                    </div>
                    <div style={{ display: "none" }}>Icons made by <a href="https://www.flaticon.com/authors/tomas-knop" title="Tomas Knop">Tomas Knop</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
                <div className={this.state.toastVisible ? "displayToast" : "hideToast"}>
                    My email has been copied to your clipboard, please do reach out!
                </div>
            </div>
        )
    }
}

export default HeadNav;