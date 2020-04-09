import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import QuestionCard from './QuestionCard'
import TextButton from '../UI/TextButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { clearLocalNotification, setLocalNotification } from '../../utils/notifications'

const Quiz = ({ questions }) => {
    const [score, setScore] = useState(0)
    const [index, setIndex] = useState(0)

    if (questions.length === 0) {
        return (
            <SafeAreaView>
                <Text>Unable to start a quiz on this deck, please add cards to the deck</Text>
            </SafeAreaView>
        )
    }

    const answerHandler = answer => {
        if (answer === questions[index].correct) {
            setScore(score => score + 1)
        }
        setIndex(index => index + 1)
    }

    if (questions.length === index) {
        clearLocalNotification()
            .then(setLocalNotification)

        return (
            <SafeAreaView>
                <Text>Score: {score}/{questions.length}</Text>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{index + 1}/{questions.length}</Text>
            <QuestionCard question={questions[index].question} answer={questions[index].answer} />
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', width: '100%' }}>
                <TextButton onPress={() => answerHandler(true)}>
                    Correct
                </TextButton>
                <TextButton onPress={() => answerHandler(false)}>
                    Incorrect
                </TextButton>
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = (decks, { route }) => {
    return {
        questions: decks[route.params.deckTitle].questions
    }
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({})