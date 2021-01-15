import React from 'react'
import ReactDOM from 'react-dom';

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './theme.js'

import Navigation from './components/navigation/Navigation.js'

import Home from './pages/home/Home.js'

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <Home />
      </ThemeProvider>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));