import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './components/App'
import ColorBox from './containers/ColorBoxContainer'
import Red from './containers/RedContainer'
import Green from './containers/GreenContainer'
import Blue from './containers/BlueContainer'


import colors from './reducers'
const store = createStore(
  combineReducers({
    colors,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={ColorBox} />
        <Route path="/red" component={Red} />
        <Route path="/green" component={Green} />
        <Route path="/blue" component={Blue} />
      </Route>
    </Router>
  </Provider>),
  document.getElementById('root')
)