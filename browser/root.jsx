import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import store from './store'

import Test from './components/Test'
import AppContainer from './containers/AppContainer'

export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={AppContainer}>
          <Route path='/test' component={Test} />
        </Route>
      </Router>
    </Provider>
  )
}
