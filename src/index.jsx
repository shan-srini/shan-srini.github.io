import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import lazyLoad from './components/LazyLoad'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './theme.js'

import Navigation from './components/navigation/Navigation.jsx'
import Footer from './components/footer/Footer.jsx'

import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Projects from './pages/projects/Projects.jsx'
import Work from './pages/work/Work.jsx'
import Contact from './pages/contact/Contact.jsx'

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));