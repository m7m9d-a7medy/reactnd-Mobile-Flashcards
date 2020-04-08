import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DecksTab from './tabs/Decks/DecksTab'
import NewDeckTab from './tabs/NewDeck/NewDeckTab'
import DeckList from './tabs/Decks/DeckList/DeckList'
import { saveDecks } from '../store/actions'
import { saveMockData } from '../utils/asyncStorage'

const Tabs = createMaterialTopTabNavigator()

export class MainApp extends Component {
  componentDidMount() {
    saveMockData()
      .then(() => {
        this.props.dispatch(saveDecks())
      })
  }

  render() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name='Decks' component={DecksTab} />
        <Tabs.Screen name='New Deck' component={NewDeckTab} />
      </Tabs.Navigator>
    )
  }
}

export default connect()(MainApp)