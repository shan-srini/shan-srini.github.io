import React, { useState } from 'react'
import style from './About.style.js'
import { Typography, Grid, Slide, Grow, Button } from '@material-ui/core'
import AboutMeCard from '../../components/aboutMeCard/AboutMeCard.js'
import cardsContent from './AboutCardsContent.js'

const About = () => {
    const classes = style();
    const [dynamicBackground, setDynamicBackground] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(false);

    return (
        <div className={classes.aboutPageContainer} style={{ backgroundColor: dynamicBackground }}>
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