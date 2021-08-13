import React from 'react'
import { Typography } from '@material-ui/core'

const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingTop: '5%',
    marginBottom: '20%'
}

const Contact = () => {
    return (
        <div style={container}>
            <Typography align='center' variant='h1' color='primary' style={{ fontSize: '3.5rem', fontWeight: '900' }}> Contact Me </Typography>
            <Typography paragraph ailgn='center' style={{ maxWidth: '600px', fontSize: '1.25rem', marginTop: '24px', padding: '0px 16px' }}>
                Please feel free to get in contact! <br /> I would love to chat, whether you're a perspective employer, or just want to say hello!
                <br />
                <Typography align='center' variant='overline' color='secondary' paragraph style={{ lineHeight: '1rem', marginTop: '16px' }}>
                    Contact details are available on the bottom left (Github, email, LinkedIn) & bottom right (resume) of your screen.
                    <br /><br />
                    (Mobile users will have to click the menu button on the collapsible navigation bar)
                </Typography>
            </Typography>
        </div>
    )
}

export default Contact;
