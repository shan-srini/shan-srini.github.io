import React from 'react'
import style from './Footer.style.js'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'
import CodeIcon from '@material-ui/icons/Code'
import resume from '../../assets/Srinivasan_resume.pdf'

const Footer = () => {
    const classes = style();

    return (
        <div className={classes.footerContainer}>
            <Typography variant="overline" className={classes.footerName} color='secondary'>Shanmukha Srinivasan</Typography>
            <br />
            <a target='_blank' href={resume} className={classes.footerLink}>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.footerButton}
                    startIcon={<DescriptionIcon />}
                >
                    Resume
            </Button>
            </a>
            <br />
            <a target='_blank' href='https://github.com/shan-srini/shan-srini.github.io' className={classes.footerLink}>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.footerButton}
                    startIcon={<CodeIcon />}
                >
                    Developed by me!
            </Button>
            </a>
        </div>
    )
}

export default Footer;