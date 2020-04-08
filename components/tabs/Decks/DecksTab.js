import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'
import DeckList from './DeckList/DeckList'

const Stack = createStackNavigator()

const Decks = () => {
    return (
        <Stack.Navigator initialRouteName='DeckList'>
            <Stack.Screen name='DeckList' component={DeckList} />
        </Stack.Navigator>
    )
}

export default Decks