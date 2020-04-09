import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextButton from '../UI/TextButton'
import { addCardToDeck } from '../../utils/asyncStorage'
import { connect } from 'react-redux'
import { addCardToDeckAction } from '../../store/actions'

const AddCard = ({ route, navigation, dispatch }) => {
    const { deckTitle } = route.params
    const [questionText, setQuestionText] = useState('')
    const [answerText, setAnswerText] = useState('')
    const [correct, setCorrect] = useState(true)
    const [valid, setValid] = useState(false)

    const submitHandler = () => {
        addCardToDeck(deckTitle, { question: questionText, answer: answerText, correct })
            .then(entry => {
                dispatch(addCardToDeckAction(deckTitle, entry))
                navigation.navigate('Deck List')
            })
    }

    const changeTextHandler = (field, text) => {
        if (field === 'question') {
            setQuestionText(text)
            setValid(text && answerText ? true : false)
        } else {
            setAnswerText(text)
            setValid(text && questionText ? true : false)
        }
    }

    return (
        <SafeAreaView>
            <TextInput placeholder='Question' value={questionText} onChangeText={e => changeTextHandler('question', e)} />
            <TextInput placeholder='Answer' value={answerText} onChangeText={e => changeTextHandler('answer', e)} />
            <TextButton onPress={() => setCorrect(correct => !correct)}>
                { correct ? 'Correct' : 'Incorrect'}
            </TextButton>
            <TextButton onPress={submitHandler} disabled={!valid}>
                Submit
            </TextButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default connect()(AddCard)