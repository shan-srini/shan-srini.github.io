import React, { useState } from 'react'
import { AppBar, Tooltip, Container, Backdrop, Toolbar, Typography, Grow } from '@material-ui/core'
import style from './Navigation.style.js'
import HamburgerBar from '../hamburger/Hamburger'
import logo from '../../../public/ShanLogo.png'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import DescriptionIcon from '@material-ui/icons/Description'

/**
 * Contains external link navigation and Header
 */
const Navigation = () => {
    const classes = style();

    return (
        <React.Fragment>
            <NavigationBar classes={classes} />
            <span className={classes.hideOnSmall}><ExternalNavigation classes={classes} /> </span>
        </React.Fragment>
    )
}

const NavigationBar = ({ classes }) => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="fixed">
            <Toolbar className={classes.navBar}>
                <span className={classes.logoContainer}>
                    <img src={logo} height="70%" width="auto" className={`${classes.navBarItem} ${classes.logo}`} onClick={() => handleNavigationClick('home')} />
                </span>
                <span className={classes.fullSizeNavBarOptions}>
                    <NavBarOptions classes={classes} hideOnSmall={true} />
                </span>
                {/* Collpased page */}
                <div onClick={() => setOpen(!open)} className={`${classes.navBarItem} ${classes.menuButton}`}>
                    <HamburgerBar open={open} onClick={() => setOpen(!open)} />
                </div>
                <Backdrop open={open} onClick={() => { setOpen(!open) }}>
                    <div style={{ height: '100%', width: '100%', position: 'absolute', backgroundColor: 'rgba(0, 0, 0, .1)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', zIndex: -1 }}></div>
                    <Container className={classes.collapsedPageNavBarOptions}>
                        <NavBarOptions classes={classes} hideOnSmall={false} />
                        <ExternalNavigation classes={classes} />
                    </Container>
                </Backdrop>
            </Toolbar>
        </AppBar >
    );
}

const NavBarOptions = ({ classes, hideOnSmall }) => {
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
            <Typography onClick={() => handleNavigationClick('volunteer')} variant={textVariant} className={`${classes.navBarItem} ${hideOnSmall && classes.volunteer}`}>
                Volunteer
            </Typography>
        </React.Fragment>
    )
}

const handleNavigationClick = (navTo) => {
    const el = document.getElementById(navTo);
    el.scrollTo({ top: 100, behavior: 'smooth' });
}

const ExternalNavigation = ({ classes }) => {
    return (
        <React.Fragment>
            <Grow timeout={3000} in>
                <Container className={classes.externalNavigationContainer}>
                    <Tooltip title="Github" placement='right'>
                        <span className={classes.navBarItem}> <GitHubIcon color='primary' className={classes.icon} /> </span>
                    </Tooltip>
                    <Tooltip title="Copy my email address" placement='right'>
                        <span className={classes.navBarItem}> <EmailIcon color='primary' className={classes.icon} /> </span>
                    </Tooltip>
                    <Tooltip title="LinkedIn" placement='right'>
                        <span className={classes.navBarItem}> <LinkedInIcon color='primary' className={classes.icon} /> </span>
                    </Tooltip>
                </Container>
            </Grow>
            <Grow timeout={3500} in>
                <Container className={classes.resumeContainer}>
                    <Tooltip title="Resume" placement='left'>
                        <span className={classes.navBarItem}> <DescriptionIcon color='primary' className={classes.icon} /> </span>
                    </Tooltip>
                </Container>
            </Grow>
        </React.Fragment>
    )
}

export default Navigation;