import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDecksAction } from '../store/actions'
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

    this.props.dispatch(getDecksAction())

    setLocalNotification()
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ header: () => null }} />
        <Stack.Screen name='DeckView' component={DeckView} options={{ title: 'Deck' }} />
        <Stack.Screen name='AddCard' component={AddCard} options={{ title: 'Add Card' }} />
        <Stack.Screen name='QuizView' component={Quiz} options={{ title: 'Quiz' }} />
        <Stack.Screen name='QuizSummary' component={QuizSummary}  options={{ title: 'Summary' }} />
      </Stack.Navigator>
    )
  }
}

export default connect()(MainApp)