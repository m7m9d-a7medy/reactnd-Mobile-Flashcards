import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Decks = () => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor="red" />
            <Text>Decks</Text>
        </SafeAreaView>
    )
}

export default Decks

const styles = StyleSheet.create({})