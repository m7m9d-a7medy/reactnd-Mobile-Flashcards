import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'
import DeckList from './DeckList/DeckList'
import DeckView from './DeckView/DeckView'

const Stack = createStackNavigator()

const Decks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='DeckList' component={DeckList} />
            <Stack.Screen name='DeckView' component={DeckView} />
        </Stack.Navigator>
    )
}

export default Decks