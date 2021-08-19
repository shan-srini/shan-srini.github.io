import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: '800px',
        background: '#484848',
        borderBottom: '1px solid #39CCCC'
    },
    heading: {
        fontSize: theme.typography.pxToRem(36),
        color: theme.palette.primary.main,
        width: '100%'
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    content: {
        fontSize: theme.typography.pxToRem(20),
        lineHeight: 1.5
    }
}));

/**
 * credit https://material-ui.com/components/accordion/
 * @returns 
 */
export default function Section({ title, content }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.root}>
            <Accordion expanded={open} onChange={() => setOpen(prev => !prev)} style={{ backgroundColor: '#001F3F' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color={'secondary'} />}
                >
                    <div className={classes.column}>
                        <div className={classes.heading}>{title}</div>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <div variant="caption" className={classes.content}>
                        {content}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}