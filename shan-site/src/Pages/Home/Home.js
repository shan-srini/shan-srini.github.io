import React from 'react'
import AnimateHeading from './AnimateHeading'
import './Home.css'
import profilePic from '../../assets/Shan_profile_pic.jpg'

const Home = () => {
  return (
    <div className="Home">
      <div className="MiddleRow">
        <div className="AboutMeSection">
          <div className="HeadingBox">
            Hi!  I'm Shanmukha Srinivasan,
            </div>
          <div className="Animated">
            <AnimateHeading headingText="  welcome to my site :)" />
          </div>
        </div>
        <div className="ProfilePicContainer">
          <img className="ProfilePic" src={profilePic} alt="Shan's profile pic" />
        </div>
      </div>
    </div>
  )
}

export default Home