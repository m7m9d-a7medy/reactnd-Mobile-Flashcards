import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AddCard = ({ route, navigation }) => {
    const { deckTitle } = route.params
    return (
        <View>
            <Text>Add card to {deckTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default AddCard