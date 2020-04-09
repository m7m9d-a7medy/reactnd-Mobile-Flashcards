import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDecks } from '../store/actions'
import { saveMockData } from '../utils/asyncStorage'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home/Home'
import DeckView from './DeckView/DeckView'
import AddCard from './AddCard/AddCard'
import Quiz from './Quiz/Quiz'

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
        <Stack.Screen name='AddCard' component={AddCard} />
        <Stack.Screen name='QuizView' component={Quiz} />
      </Stack.Navigator>
    )
  }
}

export default connect()(MainApp)