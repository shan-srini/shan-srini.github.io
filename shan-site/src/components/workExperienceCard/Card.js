import React from 'react'
import { Typography } from '@material-ui/core'
import './Card.css'

const Card = ({ title, date, company, body }) => {
    return (
        <div className="workCardContainer">
            <Typography variant="h5">{title}</Typography>
            <div>
                <Typography variant="overline" color="primary" className="companyPositionText" style={{ fontSize: '1rem', lineHeight: '1px' }}>@&nbsp;</Typography>
                <Typography variant="overline" color="secondary" className="companyPositionText" style={{ fontSize: '.9rem', lineHeight: '1px' }}>{company}</Typography>
            </div>
            {date}
            <br />
            { body}
        </div>
    )
}

export default Card;