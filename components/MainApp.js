import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveDecks } from '../store/actions'
import { saveMockData } from '../utils/asyncStorage'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home/Home'
import DeckView from './DeckView/DeckView'
import AddCard from './AddCard/AddCard'
import Quiz from './Quiz/Quiz'
import { setLocalNotification } from '../utils/notifications'
import QuizSummary from './Quiz/QuizSummary'

const Stack = createStackNavigator()

export class MainApp extends Component {
  componentDidMount() {

    this.props.dispatch(saveDecks())

    setLocalNotification()
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ header: () => null }} />
        <Stack.Screen name='DeckView' component={DeckView} />
        <Stack.Screen name='AddCard' component={AddCard} />
        <Stack.Screen name='QuizView' component={Quiz} />
        <Stack.Screen name='QuizSummary' component={QuizSummary} />
      </Stack.Navigator>
    )
  }
}

export default connect()(MainApp)