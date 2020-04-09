import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import QuestionCard from './QuestionCard'

const Quiz = ({ questions }) => {
    return (
        <View style={{ flex: 1 , padding: 20}}>
            <QuestionCard question={questions[0].question} answer={questions[0].answer} />
        </View>
    )
}

const mapStateToProps = (decks, { route }) => {
    return {
        questions: decks[route.params.deckTitle].questions
    }
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({})