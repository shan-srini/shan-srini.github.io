import React from 'react'
import './Projects.css'

import SS1 from '../../assets/AppStoreScreen1-1.jpeg'
import SS2 from '../../assets/AppStoreScreen2.jpeg'
import SS3 from '../../assets/AppStoreScreen3.jpeg'
import SS4 from '../../assets/AppStoreScreen4.jpeg'
import SS5 from '../../assets/AppStoreScreen5.jpeg'
import AvailableOnStore from '../../assets/Available_on_the_App_Store_(black).png'

const Projects = () => {
    return (
        <div className="ProjectsPage">
            <div className="Heading">
                Projects
            </div>
            <div className="ProjectsContainer">
                <div className="WebsiteProject">
                    <h1>Personal Website!</h1>
                    <div className="PersonalWebsiteParagraph"> This was a quick little project I completed with my free time.
                    <br /><br />
                        I learned a lot
                       about
                       <br /><br />
                        <li>React</li>
                        <br />
                        <li>CSS</li>
                        <br />
                        <li>Hosting on GitHub Pages {'&'} a better understanding of DNS records (learned in the process of setting up my custom domain) </li>
                        <br />
                        <li>Page Routing (using a hash router for this
                        site, due to what GitHub pages supports with React Router) </li>
                        <br />
                        <li> Overall, I had a fun, time-consuming experience with this
                        small project of mine.
                        </li>
                        <br />
                    </div>
                </div>
                <div className="ScrutinyProject">
                    <h1 className="HeadingScrutiny">ScrutinyFB
                    <a target="__blank" style={{ height: "20%", width: "30%" }} href="https://apps.apple.com/us/app/scrutinyfb/id1491261180" ><img style={{ height: "100%", width: "100%" }} src={AvailableOnStore} alt="Available on App Store" /></a> </h1>
                    <div> Read through this LinkedIn post to see my Full Stack responsibilites in this project! (Webscraping, MySQL DB, REST API, FETCH API, React Native UI)
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6612880158703570944" height="20%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe></div>

                    <div className="ScreenshotContainer">
                        <img style={{ height: "100%" }} src={SS1} alt="Screenshot1" />
                        <img className="ScreenshotsScrutiny" src={SS2} alt="Screenshot1" />
                        <img className="ScreenshotsScrutiny" src={SS3} alt="Screenshot1" />
                        <img className="ScreenshotsScrutiny" src={SS4} alt="Screenshot1" />
                        <img className="ScreenshotsScrutiny" src={SS5} alt="Screenshot1" />
                    </div>
                </div>
                <div className="ComputerSystems">
                    <h1>Computer Systems!</h1>
                    <p>
                        CS3650 - Computer Systems is a course I took in the Spring of 2019 as a Sophomore.<br />
                            It was an elective, which I specifically sought out due to it's rumored difficulty, especially with the professor I had chosen to take the course with.
                    </p>
                    <p>
                        It lived up to the hype, serving as quite a difficult course! However, it is also currently my favorite course I have taken, and was by far the most rewarding experience.
                        <br /><br /> Significant projects I completed in this class include:
                        <li><a href="https://github.com/shan-srini/FilesystemProject">Ext style Filesystem with rollback capability and garbage collection</a></li>
                        <li><a href="https://github.com/shan-srini/ShellProject">Custom Shell</a></li>
                        <li>Memory allocator</li>
                        <li>I did a lot of other cool work in C in this class, and would love to share/talk about it, upon request!</li>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects;