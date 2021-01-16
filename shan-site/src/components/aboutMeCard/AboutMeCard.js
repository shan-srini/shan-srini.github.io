import React, { useState } from 'react'
import { Typography, Grow } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import "./AboutMeCard.css"

const AboutMeCard = ({ title, body, onClick, onMouseEnter, onMouseLeave, backgroundImage, open, close, introduceTimeout }) => {
    // Initial timeout for collapsed card is staggered, afterwards it's constant
    const [collapsedTimeout, setCollapsedTimeout] = useState(introduceTimeout);

    return (
        <React.Fragment>
            <Grow in={!open} timeout={{ enter: collapsedTimeout, exit: 100 }} mountOnEnter >
                <div className="aboutMeCardCollapsed"
                    onClick={() => { onClick(); setCollapsedTimeout(1000) }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <span className="aboutMeCardHeroImage" style={{ backgroundImage: `url("${backgroundImage}")` }} />
                    <span className="aboutMeCardTitle">{title}</span>
                </div>
            </Grow>
            <Grow in={open} timeout={{ enter: 1500, exit: 10 }} mountOnEnter unmountOnExit>
                <span className="aboutMeCardExpanded">
                    <Typography variant="h4" align='center'>
                        {title}
                    </Typography>
                    <Typography paragraph>
                        {body}
                    </Typography>
                    <span className="closeIcon">
                        <CloseIcon color='secondary' fontSize='large' onClick={() => close()} />
                    </span>
                </span>
            </Grow>
        </React.Fragment >
    )
}

export default AboutMeCard;