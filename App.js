import React from 'react'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainApp from './components/MainApp'
import reducers from './store/reducer'
import middleware from './store/middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(middleware))

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainApp />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App