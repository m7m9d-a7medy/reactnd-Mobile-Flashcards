import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DeckList from '../DeckList/DeckList'
import NewDeck from '../NewDeck/NewDeck'

const Tabs = createMaterialTopTabNavigator()

const Home = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name='Deck List' component={DeckList} />
            <Tabs.Screen name='New Deck' component={NewDeck} />
        </Tabs.Navigator>
    )
}

export default Home