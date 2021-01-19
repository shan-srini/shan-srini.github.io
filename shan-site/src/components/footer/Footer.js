import React from 'react'
import style from './Footer.style.js'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'
import CodeIcon from '@material-ui/icons/Code'

const Footer = () => {
    const classes = style();

    return (
        <div className={classes.footerContainer}>
            <Typography variant="overline" className={classes.footerName} color='secondary'>Shanmukha Srinivasan</Typography>
            <br />
            <Button
                variant="outlined"
                color="primary"
                className={classes.footerButton}
                startIcon={<DescriptionIcon />}
            >
                <a target='_blank' href='' className={classes.footerLink}>Resume</a>
            </Button>
            <br />
            <Button
                variant="outlined"
                color="primary"
                className={classes.footerButton}
                startIcon={<CodeIcon />}
            >
                <a target='_blank' href='' className={classes.footerLink}>Developed by me!</a>
            </Button>
        </div>
    )
}

export default Footer;