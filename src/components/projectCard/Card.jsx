import React, { useState } from 'react'
import style from './Card.style.js'
import { Typography, Popover, Grow } from '@material-ui/core'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import CloseIcon from '@material-ui/icons/Close'

const Card = ({ previewPic, quickDescription, title, fullDescription, gitURLs, projectURL, introDelay }) => {
    const classes = style();
    const [open, setOpen] = useState();

    const handleCardOpenClose = (e, shouldOpen) => {
        setOpen(shouldOpen);
        const el = document.querySelector('#projects');
        el.scrollIntoView({ behavior: 'smooth' });
        document.body.style.overflowY = shouldOpen ? 'hidden' : 'auto';
    }

    return (
        !open ?
            <Grow in timeout={introDelay}>
                <div className={classes.collapsedCard} style={{ backgroundImage: `url("${previewPic}")` }}>
                    {/* <img src={previewPic} height="100%" width="100%" className={classes.collapsedPreviewImage} /> */}
                    <div className={classes.collapsedProjectDescriptionContainer}>
                        <Typography variant="h6" color="secondary">{title}</Typography>
                        {quickDescription}
                        <ExternalButtons classes={classes} gitURLs={gitURLs} handleCardOpenClose={handleCardOpenClose} projectURL={projectURL} />
                    </div>
                </div>
            </Grow>
            :
            <Grow in timeout={1000}>
                <div className={classes.openCardContainer} open={open} onClick={(e) => handleCardOpenClose(e, false)}>
                    <img src={previewPic} width="auto" height="40%" />
                    <Typography variant='h3' color='secondary' className={classes.expandedTitle}>{title}</Typography>
                    <div className={classes.expandedQuickDescription}>
                        {quickDescription}
                    </div>
                    <div className={classes.expandedFullDescription}>
                        {fullDescription}
                    </div>
                    <ExternalButtons classes={classes} gitURLs={gitURLs} handleCardOpenClose={handleCardOpenClose} projectURL={projectURL} isFull={true} />
                </div>
            </Grow>
    )
}

const ExternalButtons = ({ classes, gitURLs, handleCardOpenClose, projectURL, isFull }) => {
    const [popAnchor, setPopAnchor] = useState(null);

    return (
        <div className={isFull ? classes.expandedExternalLinks : classes.collapsedExternalLinks}>
            <span>
                <GitHubIcon onClick={(e) => { e.stopPropagation(); setPopAnchor(e.currentTarget) }} className={classes.externalLink} color="secondary" />
                <Popover
                    open={Boolean(popAnchor)}
                    onClose={() => setPopAnchor(null)}
                    anchorEl={popAnchor}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    style={{ background: 'transparent' }}
                >
                    <ul className={classes.gitLinksContainer}>
                        {
                            gitURLs.map((link, index) =>
                                <li key={`github-urls-${index}`}>
                                    <a className={classes.gitLink} target='_blank' href={link.url}>{link.type}</a>
                                </li>
                            )
                        }
                    </ul>
                </Popover>
            </span>
            <a href={projectURL} target='_blank'><LaunchIcon className={classes.externalLink} color="secondary" /></a>
            {
                isFull ?
                    <React.Fragment>
                        <FullscreenExitIcon onClick={(e) => handleCardOpenClose(e, false)} className={`${classes.externalLink} ${classes.collapsedFullScreenIcon}`} color="secondary" />
                        <CloseIcon className={`${classes.externalLink} ${classes.closeIcon}`} color='secondary' fontSize='large' />
                    </React.Fragment>
                    :
                    <FullscreenIcon onClick={(e) => handleCardOpenClose(e, true)} className={`${classes.externalLink} ${classes.collapsedFullScreenIcon}`} color="secondary" />
            }
        </div>
    )
}

export default Card;