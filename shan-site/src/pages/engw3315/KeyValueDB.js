import React, { useEffect, useState } from 'react';
import style from './KeyValueDB.style';
import { Typography } from '@material-ui/core';

const KeyValueDB = () => {
    const classes = style();

    return (
        <div className={classes.aboutPageContainer}>
            <Typography variant='h1' color='primary' align='center' style={{ fontSize: '3.5rem' }}> Zero to DB Hero </Typography>
        </div>
    )
}

export default KeyValueDB;