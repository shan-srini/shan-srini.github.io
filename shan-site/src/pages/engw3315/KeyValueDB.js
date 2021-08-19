import React, { useEffect, useState } from 'react';
import style from './KeyValueDB.style';
import { Typography } from '@material-ui/core';
import Section from './Section';
import Header from './Header';
import content from './content.js';

const KeyValueDB = () => {
    const classes = style();

    return (
        <>
            <Header />
            <div className={classes.container}>
                {
                    content.map((c, ii) =>
                        <Section key={ii} title={c.title} content={c.content} />
                    )
                }
            </div>
        </>
    )
}

export default KeyValueDB;