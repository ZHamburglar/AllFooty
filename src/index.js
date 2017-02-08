import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import requireAuth from './components/require_authentication'
import App from './components/app';
import League from './components/league';
import Team from './components/team';

import reducers from './reducers';
import Resources from './components/resources';

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path="resources" component={requireAuth(Resources)} />
        <Route path="league/:leagueId" component={League} />
        <Route path="team/:teamId" component={Team}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))
