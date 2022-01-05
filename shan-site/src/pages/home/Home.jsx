import React from 'react'
import { Container, Typography, Grow } from '@material-ui/core'
import style from './Home.style.js'
import profilePic from '../../assets/shan.jpg'
import DynamicTyping from '../../components/dynamicTyping/DynamicTyping.jsx'

const Home = () => {
    const classes = style();

    return (
        <Container className={classes.homeContainer}>
            <Grow in timeout={1000}>
                <img src={profilePic} height="auto" width="auto" alt="profile pic" className={classes.profilePic} />
            </Grow>
            <Grow in timeout={2000}>
                <Typography className={classes.welcomeText} variant="h2" align="center">
                    Hi, I'm Shan!
                </Typography>
            </Grow>
            <Grow in timeout={2500} mountOnEnter>
                <Typography color="secondary" variant="overline" className={classes.dynamicTextContainer}>
                    <DynamicTyping displayText="Welcome to my site :)" />
                </Typography>
            </Grow>
        </Container>
    )
}

export default Home;