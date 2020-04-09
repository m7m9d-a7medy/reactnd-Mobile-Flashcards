import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextButton from '../UI/TextButton'

const DeckView = ({ route, navigation }) => {
    const { title, cardCount } = route.params

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cardCount}>{cardCount} cards</Text>
            <TextButton onPress={() => navigation.navigate('AddCard', { title })}>
                Add card
            </TextButton>
            <TextButton onPress={() => navigation.navigate('QuizView', { title })}>
                Start Quiz
            </TextButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '200'
    },
    cardCount: {
        color: '#999',
        marginTop: 5,
        fontSize: 25,
        marginBottom: 80
    }
})

export default DeckView