import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Home from './pages/Home';
import Azalea from './pages/bots/Azalea'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './pages/Home.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Route path="/" component={Home} />
      <Route path="bots" component={Azalea}>
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
