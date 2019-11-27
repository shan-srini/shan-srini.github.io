import React, { Component } from 'react'
import { BrowserRouter, HashRouter, Route, Link , Switch} from "react-router-dom"
import logo from './logo.svg'
import './App.css'

import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'

class App extends Component {

  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;