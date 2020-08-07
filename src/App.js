import React, { Component } from 'react';
import Navibar from './components/Navibar'
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound } from './pages'

export default class App extends Component {
  render() {
    return (
      <>
        <Navibar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </>
    );
  }
}
