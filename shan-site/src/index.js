
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme.js';

import App from './App';
import KeyValueDB from './pages/engw3315/KeyValueDB';
import NotFound from './pages/notFound/notFound';

const Index = () => {
    return (

        <HashRouter basename="/">
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Switch>
                    <Route exact path="/" component={App} />
                    {/* Project for ENGW-3315 */}
                    <Route exact path="/engw3315/project" component={KeyValueDB} />
                    <Route component={NotFound} />
                </Switch>
            </ThemeProvider>
        </HashRouter>
    )
}

ReactDOM.render(<Index />, document.getElementById('app'));