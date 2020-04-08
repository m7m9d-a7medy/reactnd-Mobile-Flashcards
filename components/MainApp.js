import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DecksTab from './tabs/Decks/DecksTab'
import NewDeckTab from './tabs/NewDeck/NewDeckTab'

const Tabs = createMaterialTopTabNavigator()

export class MainApp extends Component {
  render() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name='Decks' component={DecksTab}/>
        <Tabs.Screen name='New Deck' component={NewDeckTab}/>
      </Tabs.Navigator>
    )
  }
}

export default MainApp