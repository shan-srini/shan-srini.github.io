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
                        <li>Hosting on GitHub Pages</li>
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
                <div className="ComingSoon">
                    <h1>Coming Soon!</h1>
                    Stratex (Official Company Name decision pending) has another project in the thinktank right now! Stay tuned!
                </div>
            </div>
        </div>
    )
}

export default Projects;