import React, { Component } from 'react'
import './Help.css'

class ScrutinyFBHelp extends Component {

    render() {
        return (
            <div>
                <div>
                    <div className="HeadingContainer">
                        <div className="HeadingWelcomeText">
                            Welcome to ScrutinyFB Help page
                        </div>
                    </div>
                </div>
                <div className="ContactContainer">
                    Please contact developers for any technical difficulties or questions
                </div>
                <div className="ShanInfo">
                    srinivasan.sha@husky.neu.edu
                </div>
                <div className="RyanInfo">
                    doucette.ry@husky.neu.edu
                </div>
            </div>
        )
    }
}

export default ScrutinyFBHelp;