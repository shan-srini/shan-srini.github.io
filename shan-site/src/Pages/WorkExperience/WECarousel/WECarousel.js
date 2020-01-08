import React from 'react'
import './WECarousel.css'

/*
    My poor and rushed implementation
    Not even following React design, I am rushing this, while in classes
    for before applying to Co-Op's :/ note to self FUTURE UPDATE MUST TAKE CARE OF THIS hand props of data instead!!!!
    1 is Staples
    2 is Tutoring
 */

export default class WECarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
            update: false,
        }
    }

    changeCurrent(num) {
        this.setState({ update: true })
        //If changing this change current num, currently you have to change the animation time in the stylesheet
        //as well, for both Card in RemoveCard animations
        setTimeout(() => this.implementChangeNum(num), 800)

    }

    implementChangeNum(num) {
        this.setState({ current: num })
        this.setState({ update: false })
    }


    render() {
        return (
            <div className="WECarousel">
                {/* Staples */}
                {
                    (this.state.current === 1 && this.state.update) || this.state.current === 1 ?
                        <div className={this.state.update ? "RemoveCard" : "Card"}>
                            < Staples />
                        </div>
                        :
                        null
                }
                {/* Tutor */}
                {
                    (this.state.current === 2 && this.state.update) || this.state.current === 2 ?
                        <div className={this.state.update ? "RemoveCard" : "Card"}>
                            <Tutor />
                        </div>
                        :
                        null
                }

                <div className="Picker">
                    <button className="WEButton" onClick={() => this.changeCurrent(1)}>
                        Staples
                    </button>
                    <button className="WEButton" onClick={() => this.changeCurrent(2)}>
                        Tutor
                    </button>
                </div>
            </div >
        )
    }
}

const Staples = () => {
    return (
        <div>
            <h1 className="CardHeader"> Staples </h1>
            <p className="CardParagraph">
                My internship at Staples was fantastic exposure to real world applications of my knowledge of Computer Science.
                I gained countless valuable skills including,
                <li>React JS</li>
                <li>Github proficiency</li>
                <li>Understanding of Full Stack applications</li>
                <li><div style={{ display: "inline-block", verticalAlign: "text-top" }}>Most importantly was able to work on a team to develop a prototype Comparison Tool
                which will be implemented on the Staples website in the near future</div></li>
                <br />
                - Worked on Staples.com home page team, assisting in front-end React, Javascript, and HTML development
                <br /><br />
                - Played an integral role in the ground-up development of the compare function found on Staples.com
                <br /><br />
                - Developed unit test cases for the SKU page
                <br /><br />
            </p>
        </div>
    )
}

const Tutor = () => {
    return (
        <div>
            <h1 className="CardHeader"> Tutor </h1>
            <p className="CardParagraph">

            </p>
        </div>
    )
}