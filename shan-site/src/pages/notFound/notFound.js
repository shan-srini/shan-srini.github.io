import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import Navigation from '../../components/navigation/Navigation';

const NotFound = () => {

    return (
        <div>
            <Navigation />
            <Typography variant='h1' color='secondary' align='center' style={{ fontSize: '3.5rem', marginTop: '20%' }}> 404 not found </Typography>
        </div>
    )
}

export default NotFound;