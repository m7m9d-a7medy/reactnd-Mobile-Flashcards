import React from 'react'
import { StyleSheet, Text, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const NewDeck = () => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor="red" />
            <Text>NewDeck</Text>
        </SafeAreaView>
    )
}

export default NewDeck

const styles = StyleSheet.create({})