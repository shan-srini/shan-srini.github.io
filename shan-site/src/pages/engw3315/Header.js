import React from 'react';
import { Typography } from '@material-ui/core';

const Header = () => {

    return (
        <>
            <div style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(12, 17, 100, 0.3)), url(https://blog.radware.com/wp-content/uploads/2018/11/AdobeStock_215123311-1.jpg)",
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: 'top',
                backgroundPositionX: 'center',
                height: 300,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                zIndex: 1,
                width: '100%',
                top: 0
            }}>
            </div>
            <div style={{
                position: 'absolute',
                height: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: 75,
                marginBottom: 50,
                zIndex: 1,
                width: '100%',
                top: 0
            }}>
                <Typography variant='h1' color='primary' align='start' style={{ fontSize: '3.5rem', fontWeight: 900 }}> Zero to DB Hero </Typography>
                <div style={{
                    flex: 1,
                    // background: 'rgba(0, 0, 0, 0.9)',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 30
                }}>
                    <Typography variant='overline' color='primary' align='start' style={{ fontSize: 28, lineHeight: 1.25, fontWeight: 600 }}> By: Shanmukha Srinivasan </Typography>
                    <Typography variant='overline' color='primary' align='start' style={{ fontSize: 28, width: 'fit-content', fontWeight: 600 }}> ENGW-3315 </Typography>
                </div>
            </div>
        </>
    )
}

export default Header;