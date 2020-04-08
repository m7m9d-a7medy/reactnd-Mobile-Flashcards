import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DeckView = ({ route, navigation }) => {
    console.log('Deck View!')
    console.log(route.params)

    return (
        <View>
            <Text>DeckView</Text>
        </View>
    )
}

export default DeckView

const styles = StyleSheet.create({})