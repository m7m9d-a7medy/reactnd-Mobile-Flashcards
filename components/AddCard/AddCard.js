import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextButton from '../UI/TextButton'
import { connect } from 'react-redux'
import { addCardToDeckAction } from '../../store/actions'
import StyledTextInput from '../UI/StyledTextInput'

const AddCard = ({ route, navigation, dispatch }) => {
    const { deckTitle } = route.params
    const [questionText, setQuestionText] = useState('')
    const [answerText, setAnswerText] = useState('')
    const [correct, setCorrect] = useState(true)
    const [valid, setValid] = useState(false)

    const submitHandler = () => {
        dispatch(addCardToDeckAction(
            deckTitle,
            {
                question: questionText,
                answer: answerText,
                correct
            }))

        navigation.navigate('Deck List')
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

    const variant = correct ? 'green' : 'red'

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <StyledTextInput placeholder='Question' value={questionText} onChangeText={e => changeTextHandler('question', e)} />
                <StyledTextInput placeholder='Answer' value={answerText} onChangeText={e => changeTextHandler('answer', e)} />

                <TextButton variant={variant} onPress={() => setCorrect(correct => !correct)}>
                    {correct ? 'Correct' : 'Incorrect'}
                </TextButton>
            </View>
            <View style={styles.submitContainer}>
                <TextButton onPress={submitHandler} disabled={!valid}>
                    Submit
                </TextButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 2,
        paddingHorizontal: 15
    },
    submitContainer: {
        flex: 3,
        padding: 15
    }
})

export default connect()(AddCard)