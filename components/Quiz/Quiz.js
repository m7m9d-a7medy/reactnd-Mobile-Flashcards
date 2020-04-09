import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'
import TextButton from '../UI/TextButton'
import QuizUnavailable from './QuizUnavialable'
import { SafeAreaView } from 'react-native-safe-area-context'
import { clearLocalNotification, setLocalNotification } from '../../utils/notifications'

const Quiz = ({ questions, route, navigation }) => {
    const [score, setScore] = useState(0)
    const [index, setIndex] = useState(0)
    const total = questions.length
    const title = route.params.title

    if (total === 0) {
        return <QuizUnavailable />
    }

    const answerHandler = answer => {
        if (answer === questions[index].correct) {
            setScore(score => score + 1)
        }
        setIndex(index => index + 1)
    }

    if (total === index) {
        clearLocalNotification()
            .then(setLocalNotification)
        setIndex(0)
        setScore(0)
        navigation.navigate('QuizSummary', { score, total, title })

        return null
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.mainText}>{index + 1}/{total}</Text>
            <QuestionCard question={questions[index].question} answer={questions[index].answer} />
            <View style={styles.answerContainer}>
                <TextButton variant='green' onPress={() => answerHandler(true)}>
                    Correct
                </TextButton>
                <TextButton variant='red' onPress={() => answerHandler(false)}>
                    Incorrect
                </TextButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    answerContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    mainText: {
        fontSize: 20,
        marginTop: 15,
        textAlign: 'center',
        width: '100%'
    }
})

const mapStateToProps = (decks, { route }) => {
    return {
        questions: decks[route.params.title].questions
    }
}

export default connect(mapStateToProps)(Quiz)