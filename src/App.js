import React, { Component } from 'react';
import { Navibar, Footer } from './components'
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound } from './pages';
import { Azalea } from './pages/bots';
import { AzaleaGuide } from './pages/guide';

export default class App extends Component {
  render() {
    return (
      <>
        <Navibar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/bots/azalea" component={Azalea}/>
          <Route exact path="/guide/azalea" component={AzaleaGuide}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </>
    );
  }
}
