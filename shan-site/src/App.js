import React, { Component } from 'react'
import { HashRouter, Route, Switch} from "react-router-dom"
// import logo from './logo.svg'
import './App.css'

import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App;