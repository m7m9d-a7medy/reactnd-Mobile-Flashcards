import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const QuizUnavilable = () => {
    return (
        <SafeAreaView style={[styles.container, { width: '100%' }]}>
            <Text style={styles.mainText, { marginTop: 0, marginHorizontal: 10, fontSize: 30 }}>Unable to start a quiz on this deck, please add cards to the deck</Text>
        </SafeAreaView>
    )
}

export default QuizUnavilable

const styles = StyleSheet.create({})
