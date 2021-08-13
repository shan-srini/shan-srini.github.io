import React, { useRef } from 'react';
import lazyLoad from './components/LazyLoad';

import Navigation from './components/navigation/Navigation.js';
import Footer from './components/footer/Footer.js';

import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Projects from './pages/projects/Projects.js';
import Work from './pages/work/Work.js';
import Contact from './pages/contact/Contact.js';

const pageStyle = {
  height: '100vh',
  minHeight: '600px',
}

const App = () => {
  const homeRef = useRef();
  const isHomeVisible = lazyLoad(homeRef);
  const aboutRef = useRef();
  const isAboutVisible = lazyLoad(aboutRef);
  const projectsRef = useRef();
  const isProjectsVisible = lazyLoad(projectsRef);
  const workRef = useRef();
  const isWorkVisible = lazyLoad(workRef);
  const contactRef = useRef();
  const isContactVisible = lazyLoad(contactRef);

  return (
    <div>
      <Navigation />
      <div ref={homeRef} style={pageStyle} id="home">
        {
          isHomeVisible && <Home />
        }
      </div>
      <div ref={aboutRef} style={pageStyle} id="about">
        {
          isAboutVisible && <About />
        }
      </div>
      <div ref={projectsRef} style={pageStyle} id="projects">
        {
          isProjectsVisible && <Projects />
        }
      </div>
      <div ref={workRef} style={pageStyle} id="work">
        {
          isWorkVisible && <Work />
        }
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App;