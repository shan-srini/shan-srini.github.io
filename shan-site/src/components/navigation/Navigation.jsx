import React, { useState } from 'react'
import { AppBar, Tooltip, Container, Backdrop, Toolbar, Typography, Grow, Snackbar, SnackbarContent, useScrollTrigger, Slide } from '@material-ui/core'
import style from './Navigation.style.js'
import HamburgerBar from '../hamburger/Hamburger'
import logo from '../../../public/ShanLogo.png'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import DescriptionIcon from '@material-ui/icons/Description'
import resume from '../../assets/Srinivasan_resume.pdf'

/**
 * Contains external link navigation and Header
 */
const Navigation = (props) => {
    const classes = style();
    const [notificationVisible, setNotificationVisible] = useState(false);

    return (
        <React.Fragment>
            <NavigationBar classes={classes} setNotificationVisible={setNotificationVisible} />
            <span className={classes.hideOnSmall}>
                <ExternalNavigation setNotificationVisible={setNotificationVisible} classes={classes} />
            </span>
            {/* Email copied notification useState for message if using for other cases */}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={notificationVisible}
                autoHideDuration={5000}
                onClose={() => setNotificationVisible(false)}
            >
                <SnackbarContent
                    className={classes.snackBarNotification}
                    message="Email copied to clipboard, feel free to reach out!"
                />
            </Snackbar>
        </React.Fragment>
    )
}

const NavigationBar = ({ classes, setNotificationVisible }) => {
    const [open, setOpen] = useState(false);
    const handleNavigationClick = (navTo) => {
        const el = document.querySelector('#' + navTo);
        el.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
    }
    const trigger = useScrollTrigger()

    return (
        <Slide appear={false} direction="down" in={!trigger || open}>
            <AppBar position="fixed">
                <Toolbar className={classes.navBar}>
                    <span className={classes.logoContainer}>
                        <img src={logo} height="70%" width="auto" className={`${classes.navBarItem} ${classes.logo}`} onClick={() => handleNavigationClick('home')} />
                    </span>
                    <span className={classes.fullSizeNavBarOptions}>
                        <NavBarOptions classes={classes} hideOnSmall={true} handleNavigationClick={handleNavigationClick} />
                    </span>
                    {/* Collpased page */}
                    <div onClick={() => setOpen(!open)} className={`${classes.navBarItem} ${classes.menuButton}`}>
                        <HamburgerBar open={open} onClick={() => setOpen(!open)} />
                    </div>
                    <Backdrop open={open} onClick={() => { setOpen(!open) }}>
                        <div style={{ height: '100%', width: '100%', position: 'absolute', backgroundColor: 'rgba(0, 0, 0, .1)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', zIndex: -1 }}></div>
                        <Container className={classes.collapsedPageNavBarOptions}>
                            <NavBarOptions classes={classes} hideOnSmall={false} handleNavigationClick={handleNavigationClick} />
                            <ExternalNavigation classes={classes} setNotificationVisible={setNotificationVisible} />
                        </Container>
                    </Backdrop>
                </Toolbar>
            </AppBar >
        </Slide>

    );
}

const NavBarOptions = ({ classes, hideOnSmall, handleNavigationClick }) => {
    const textVariant = hideOnSmall ? "overline" : "h3";

    return (
        <React.Fragment>
            <Typography onClick={() => handleNavigationClick('about')} variant={textVariant} className={`${classes.navBarItem} ${hideOnSmall && classes.about}`}>
                About
            </Typography>
            <Typography onClick={() => handleNavigationClick('projects')} variant={textVariant} className={`${classes.navBarItem} ${hideOnSmall && classes.projects}`}>
                Projects
            </Typography>
            <Typography onClick={() => handleNavigationClick('work')} variant={textVariant} className={`${classes.navBarItem} ${hideOnSmall && classes.work}`}>
                Work
            </Typography>
            <Typography onClick={() => handleNavigationClick('contact')} variant={textVariant} className={`${classes.navBarItem} ${hideOnSmall && classes.contact}`}>
                Contact
            </Typography>
        </React.Fragment>
    )
}

const ExternalNavigation = ({ classes, setNotificationVisible }) => {
    const copyEmail = () => {
        copyText('srinivasan.sha@northeastern.edu');
        setNotificationVisible(true);
    }
    return (
        <React.Fragment>
            <Grow timeout={3000} in>
                <Container className={classes.externalNavigationContainer}>
                    <Tooltip title="Github" placement='right'>
                        <a target='_blank' href='https://github.com/shan-srini' className={classes.navBarItem}>
                            <GitHubIcon color='primary' className={classes.icon} />
                        </a>
                    </Tooltip>
                    <Tooltip title="Copy my email address" placement='right'>
                        <span onClick={() => copyEmail()} className={classes.navBarItem}>
                            <EmailIcon color='primary' className={classes.icon} />
                        </span>
                    </Tooltip>
                    <Tooltip title="LinkedIn" placement='right'>
                        <a target='_blank' href='https://www.linkedin.com/in/srinishan/' className={classes.navBarItem}>
                            <LinkedInIcon color='primary' className={classes.icon} />
                        </a>
                    </Tooltip>
                </Container>
            </Grow>
            <Grow timeout={3500} in>
                <Container className={classes.resumeContainer}>
                    <Tooltip title="Resume" placement='left'>
                        <a target='_blank' href={resume} className={classes.navBarItem}>
                            <DescriptionIcon color='primary' className={classes.icon} />
                        </a>
                    </Tooltip>
                </Container>
            </Grow>
        </React.Fragment>
    )
}

function copyText(copyValue) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = copyValue;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

export default Navigation;