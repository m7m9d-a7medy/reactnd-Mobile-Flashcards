import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDecks } from '../store/actions'
import { saveMockData } from '../utils/asyncStorage'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './home/Home'
import DeckView from './deckView/DeckView'

const Stack = createStackNavigator()

export class MainApp extends Component {
  componentDidMount() {
    saveMockData()
      .then(() => {
        this.props.dispatch(saveDecks())
      })
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{header: () => null}}/>
        <Stack.Screen name='DeckView' component={DeckView} />
      </Stack.Navigator>
    )
  }
}

export default connect()(MainApp)