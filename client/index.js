'use strict';

import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import Hello from './components/hello/Hello.react';
import createBrowserHistory from 'history/lib/createBrowserHistory';

require('./index.css');

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path='/' component={Hello} />
  </Router>
, document.getElementById('hello'));
