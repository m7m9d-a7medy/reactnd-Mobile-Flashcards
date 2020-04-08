import React from 'react'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import MainApp from './components/MainApp'
import reducers from './store/reducer'
import middleware from './store/middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(middleware))

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App