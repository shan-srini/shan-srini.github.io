import React, { useEffect, useState } from 'react'
import style from './About.style.js'
import { Typography, Grid, Slide, Grow, Button } from '@material-ui/core'
import AboutMeCard from '../../components/aboutMeCard/AboutMeCard.jsx'
import cardsContent from './AboutCardsContent.jsx'

const About = () => {
    const classes = style();
    // const [dynamicBackground, setDynamicBackground] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(false);
    const rootEl = document.getElementById('app');

    useEffect(() => {
        rootEl.style.transition = 'background-color 0.75s cubic-bezier(0.8, 0, 0.2, 1) 0s'
    }, [])

    const setDynamicBackground = (color) => {
        rootEl.style.backgroundColor = color;
    }

    return (
        <div className={classes.aboutPageContainer}>
            <Typography variant='h1' color='primary' align='center' style={{ fontSize: '3.5rem' }}> About Me </Typography>
            <div className={classes.aboutMeCardsGridContainer}>
                {
                    cardsContent.map((option, index) =>
                        <AboutMeCard
                            introduceTimeout={500 * (index + 1)}
                            key={`aboutMeCard-${index}`}
                            onClick={() => { setSelectedIndex(index); setDynamicBackground(cardsContent[index].themeColor) }}
                            onMouseEnter={() => setDynamicBackground(cardsContent[index].themeColor)}
                            onMouseLeave={() => selectedIndex === false && setDynamicBackground(null)} // index could be 0...
                            title={option.title}
                            body={option.body}
                            backgroundImage={option.backgroundImage}
                            open={selectedIndex === index}
                            close={() => { setSelectedIndex(false); setDynamicBackground(null) }}
                        />
                    )
                }
            </div>
        </div >
    )
}

export default About;