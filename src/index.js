import React from 'react'
import ReactDOM from 'react-dom'
import colors from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/AppContainer'

let store = createStore(colors)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)