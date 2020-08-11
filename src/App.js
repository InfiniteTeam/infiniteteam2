import React, { Component } from 'react';
import { Navibar, Footer } from './components'
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound } from './pages';
import { Azalea } from './pages/bots';
import { Guide } from './pages/guide';
import guides from './pages/guide/guides';

export default class App extends Component {
  render() {
    return (
      <>
        <Navibar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/bots/azalea" component={Azalea}/>
          <Route exact path="/guide/:whose" render={props => <Guide whose={props.match.params.whose} name={guides.filter(one => one.home)[0].name} />} />
          <Route exact path="/guide/:whose/:id" render={props => <Guide whose={props.match.params.whose} name={props.match.params.id} />} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </>
    );
  }
}
