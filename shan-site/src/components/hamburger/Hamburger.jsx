import React from 'react'
import './Hamburger.css'

const Hamburger = (props) => {
    const { open } = props;

    return (
        <div {...props} className="navBarItem menuButton">
            <div className={`hamburgerBar ${open ? 'bar1Transition' : ''}`} />
            <div className={`hamburgerBar ${open ? 'bar2Transition' : ''}`} />
            <div className={`hamburgerBar ${open ? 'bar3Transition' : ''}`} />
        </div>
    )
}

export default Hamburger;