import React, { Component } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
// import logo from './logo.svg'
import './App.css'

import PersonalSite from './Pages/PersonalSite/PersonalSite'
import NotFound from './Pages/NotFound/NotFound'

//ScrutinyFB
import ScrutinyFBPrivacyPolicy from './Pages/ScrutinyFB/Privacy_Policy/ScrutinyFB_PrivacyPolicy'
import ScrutinyFBHelp from './Pages/ScrutinyFB/Help/ScrutinyFB_Help'

class App extends Component {

  render() {
    return (
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={PersonalSite} />

          <Route exact path="/ScrutinyFB/Help" component={ScrutinyFBHelp} />
          <Route exact path="/ScrutinyFB/PrivacyPolicy" component={ScrutinyFBPrivacyPolicy} />

          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App;