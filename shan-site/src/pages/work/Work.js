import React, { useState } from 'react'
import style from './Work.style.js'
import { Typography, Tabs, Tab } from '@material-ui/core'
import content from './WorkCardsContent.js'
import WorkExperienceCard from '../../components/workExperienceCard/Card.js'

const Work = () => {
    const classes = style();
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className={classes.workPageContainer}>
            <Typography variant='h1' color='primary' align='center' style={{ fontSize: '3rem' }}> Work Experience </Typography>
            <WorkExperienceCard
                title={content[selectedIndex].title}
                company={content[selectedIndex].company}
                date={content[selectedIndex].date}
                body={content[selectedIndex].body}
            />
            <Tabs
                value={selectedIndex}
                onChange={(e, nv) => setSelectedIndex(nv)}
                style={{ width: '100%' }}
                variant='scrollable'
                scrollButtons='on'
                indicatorColor='secondary'
            >
                {
                    content.map((card, index) =>
                        <Tab
                            key={`projects-card-${index}`}
                            className={classes.tab}
                            icon={<img width="100%" height="auto" src={card.logoSrc} />}
                        />
                    )
                }
            </Tabs>
        </div>
    )
}

export default Work;