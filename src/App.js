import React, { Component } from 'react';
import Navibar from './components/Navibar'
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound } from './pages'
import { Azalea } from './pages/bots'

export default class App extends Component {
  render() {
    return (
      <>
        <Navibar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/bots/azalea" component={Azalea}/>
          <Route component={NotFound}/>
        </Switch>
      </>
    );
  }
}
