import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextButton from '../UI/TextButton'
import { saveDeckTitle } from '../../utils/asyncStorage'
import { connect } from 'react-redux'
import { saveDeckTitleAction } from '../../store/actions'
import StyledTextInput from '../UI/StyledTextInput'

const NewDeck = ({ dispatch, navigation }) => {
    const [title, setTitle] = useState('')

    const submitHandler = () => {
        if (title) {
            dispatch(saveDeckTitleAction(title))
            navigation.navigate('Deck List')
        }
    }

    return (
        <SafeAreaView>
            <Text>What's the title of your new deck?</Text>
            <StyledTextInput placeholder='Deck Title' onChangeText={e => setTitle(e)} value={title} />
            <TextButton onPress={submitHandler}>
                Submit
            </TextButton>
        </SafeAreaView>
    )
}

export default connect()(NewDeck)

const styles = StyleSheet.create({})