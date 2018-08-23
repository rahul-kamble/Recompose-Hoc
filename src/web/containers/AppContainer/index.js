/* global sessionStorage */
import React from 'react'
import Login from '../Login'
import Header from '../Header'
import Dashboard from '../Dashboard'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../../../common/route/history'

export default () => (
    <div>
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )