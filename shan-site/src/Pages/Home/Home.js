import React, { Component } from 'react'
import AnimateHeading from './AnimateHeading'
import './Home.css'
import profilePic from '../../assets/Shan_profile_pic.jpg'
import { thisExpression } from '@babel/types';

class Home extends Component {

    FadeInSection(props) {
        const [isVisible, setVisible] = React.useState(false);
        const domRef = React.useRef();
        React.useEffect(() => {
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
          });
          observer.observe(domRef.current);
        }, []);
        return (
          <div
            className={`section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
          >
            {props.children}
          </div>
        );
      }

    render() {
        return (
            <div className="Home">
                <div className="HeadingBox">
                    {/* <h1 className="HeadingAnimate"> Welcome! To Shan's Personal React Website </h1> */}
                    <AnimateHeading headingText="Hi!  I'm Shanmukha Srinivasan, welcome to my site :)"/>
                </div>
                <div className="ProfilePicContainer">
                    <img className="ProfilePic" src={profilePic} alt="Shan's profile pic" />
                </div>
                <this.FadeInSection>
                <div className="ProfilePicContainer">
                    <img className="ProfilePic" src={profilePic} alt="Shan's profile pic" />
                </div>
                </this.FadeInSection>
                <this.FadeInSection>
                <div className="ProfilePicContainer">
                    <img className="ProfilePic" src={profilePic} alt="Shan's profile pic" />
                </div>
                </this.FadeInSection>
            </div>
        )
    }
}

export default Home