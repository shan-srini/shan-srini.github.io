import React from 'react';
import Logo from '../assets/ShanLogo.png'

const NavBarStyle = {
    backgroundColor: "black",
    overflowY: "hidden",
}

const section = {
    transform: "translateY(-20vh)",
    visibility: "visible",
    willChange: 'opacity, transform, visibility,'
}
const sectionIsVisible = {
    opacity: '1',
    transform: 'none',
    visibility: 'visible',
}

const LogoStyle = {
    paddingLeft: "3%",
    paddingTop: "1%",
    height: "25px",
}

const placeHolder = {
    position: "relative",
    left: "90%"
}

class HeadNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
            // <div style={this.state.visible ? sectionIsVisible : section}>
            <div>
                <div style={NavBarStyle}>
                    <div style={LogoStyle}>
                        <img style={{ height: "100%" }} src={Logo} />
                    </div>
                    <a style={placeHolder} href="https://github.com/shan-srini" target="__blank">
                        github icon here
                    </a>
                </div>
            </div>
        )
    }
}

export default HeadNav;