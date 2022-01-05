import React from 'react'
import aboutMeBG from '../../assets/aboutMeBG.jpg'
import techSkillsBG from '../../assets/techSkillsBG.jpg'
import neuBG from '../../assets/neuBG.svg'
import interestsBG from '../../assets/interestsBG.jpg'

const subHeading = {
    fontSize: '24px',
    color: '#f50057'
}

const emphasize = {
    color: '#58a6ff'
}

const content = [
    {
        title: 'INTRO',
        body: <span>
            <p>
                <span style={subHeading}>Who am I?</span>
                <div>Hey there! My name is Shanmukha Srinivasan (Shan).</div>
            </p>
            <p>
                <span style={subHeading}>What do I do?</span>
                <div> I am a passionate <strong style={emphasize}>Software Engineer</strong>, who is always ready to try something new! <br /> I'm currently completing my third year at <strong style={emphasize}>Northeastern University</strong>,
                where I am majoring in <strong style={emphasize}>Computer Science & Cognitive Psychology</strong>.</div>
            </p>
            <p>
                <span style={subHeading}>Cool! Can I hire you?!</span>
                <div>I'm currently <strong style={emphasize}>searching for a co-op position (June-December 2021)</strong>, so feel free to look through this site and get in touch!</div>
            </p>
        </span>,
        themeColor: 'rgba(17, 157, 244, .7)',
        backgroundImage: aboutMeBG
    },
    {
        title: 'TECHNICAL SKILLS',
        body: <span style={{ dipslay: 'flex' }}>
            <br />Here are some skills & tools that I've utilized in my past endeavors!
            <div>
                <span style={subHeading}>Languages</span><br />
                Java | Python | Javascript | SQL | HTML | CSS | C | AMD64 Assembly
            </div>
            <div>
                <span style={subHeading}>Frameworks & Libraries</span><br />
                Git | ReactJS | MySQL | Flask | Bash | Vim | REST API | JWT | Flask | Java Spring Boot | AngularJS | Selenium | MongoDB
            </div>
            <div>
                <span style={subHeading}>Tools & Platforms</span><br />
                Heroku | Google Cloud | Docker
            </div>
            <div>
                <span style={subHeading}>Favorites</span><br />
                My current goto tools for personal projects are <br /> Javascript: ReactJS, Python: Flask, MongoDB or MySQL, and Google Cloud Run
            </div>
        </span>,
        themeColor: 'rgba(0, 0, 130)',
        backgroundImage: techSkillsBG
    },
    {
        title: 'EDUCATION',
        body: <span>
            <br />
            <span style={subHeading}>College</span><br />
            <strong style={emphasize}>Northeastern University, Boston MA</strong> <br /> Khoury College. Computer Science & Cognitive Psychology <br /> (<strong style={emphasize}>GPA: 3.93/4.00</strong>)
            <br /> <strong style={emphasize}>Relevant Courses: </strong>Computer Systems, Networks & Distributed Systems, Systems Security, Object-Oriented Design, Database Design, Cognition
            <br /> <br />
            <span style={subHeading}>Study Abroad </span><br />
            <strong style={emphasize}>American College of Thessaloniki</strong><br />
            1 semester<br />
            Check out my recap <a target="_blank" href="">video!</a>
            <br /> <br />
            <span style={subHeading}>High School</span><br />
            <strong style={emphasize}>Austin Prep, Reading MA</strong><br />
        </span>,
        themeColor: 'rgb(148, 22, 8)',
        backgroundImage: neuBG
    },
    {
        title: 'MY INTERESTS',
        body: <span>
            <br />
            <span style={subHeading}>Hobbies & Interests</span>
            <ul>
                <li><strong style={emphasize}>Music!</strong> I love talking to people about their music tastes, discovering new music myself, and learning new songs on my <strong style={emphasize}>guitar</strong>. </li>
                <br />
                <li>Recently, (especially to pass time during the pandemic), I've been entrenched in <strong style={emphasize}>coding</strong> different projects for fun! </li>
                <br />
                <li><strong style={emphasize}>Poker</strong> has always grabbed my attention. It's a fascinating game that I enjoy playing frequently with friends</li>
                <br />
                <li><strong style={emphasize}>Fantasy Football!</strong> I'm typically the stereotypical stathead of the league :) </li>
            </ul>
        </span>,
        themeColor: 'rgba(220, 154, 66, .5)',
        backgroundImage: interestsBG
    }
]

export default content;