import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="organizer">
                <div className="AboutMePara">
                    <h1>About Me</h1>
                    Hi! I am a Sophomore at Northeastern University studying Computer Science and Cognitive Psychology.
                        <br /><br />
                    I am currently exploring the world of Computer Science, and my professional goals. Though I am also studying
                    Cognitive Psychology, my primary focus is Computer Science, and I aim to use Psychology simply to complement it, in
                    order to better understand information architecture models, algorithms, and domains which are relevant to my work
                    as a Computer programmer.
                    </div>

                <div className="HobbiesAndInterests">
                    <h1> {`Hobbies & Interests`} </h1>

                    <div> <li>I enjoy Fantasy Football (in fact I have won 3 leagues in the past two seasons!)</li><br />
                        <li><text>In the past, I have also been an editor for an amateur sports blog which my friends and I operated (<a href="https://www.wildcardsportsmedia.com">Wildcard Sports</a>, coming back soon!)</text></li><br />
                        <li>I enjoy music, I love talking about different genres, I am an amateur audiophile, and a beginner guitar player.</li><br />
                    </div>
                </div>

                <div className="ToolsAndTech">
                    <h1> {`Tools & Tech`} </h1>
                    <div>
                        So far, as a Sophomore, I have learnt extensively in classes
                            <li> Java </li>
                        <li>MySQL</li>
                        <li>DrRacket (Functional Programming Language)</li>
                        <br />
                        Classes have introduced me to, or, I have experimented on my own in
                            <li>Python</li> <li>XML</li> <li>XPath</li> <li>R</li> <li>UML diagramming</li>
                        I have also gotten exposure through my internship at Staples Corporate and through projects
                        like this website and my React Native application on the ios app store!
                            <li>React</li> <li>Javascript</li> <li>HTML</li> <li>CSS</li>
                    </div>
                </div>

                <div className="Education">
                    <h1> {`Education`} </h1>
                    Northeastern University, Khoury College, <br /> Pursuing a Degree in Computer Science and Cognitive Psychology (3.962 / 4.0 GPA)
                        <br /><br />
                    <h3 style={{ display: "inline" }}>Interesting Courses</h3>
                    <div>
                        <li>Computer Systems</li>
                        <li>Algorithms</li>
                        <li>Database Design</li>
                        <li>Information Science 2000</li>
                        <li>Cognition</li>
                    </div>
                    <br />
                    American College of Thessaloniki (Study Abroad Semester) <a href="https://www.youtube.com/watch?v=eCgFrHY0WXA"> Check out my Greece recap video! </a>
                    <br />
                    <br />
                    Austin Preparatory High School (4.33 / 4.00 Weighted GPA)
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe;