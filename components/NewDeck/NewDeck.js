import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
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
            setTitle('')
            navigation.navigate('Deck List')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.header}>What's the title of your new deck?</Text>
                <StyledTextInput placeholder='Deck Title' onChangeText={e => setTitle(e)} value={title} />
                <TextButton onPress={submitHandler}>
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
        alignItems: 'center',
    },
    main: {
        maxWidth: '80%',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flex: 1,
        maxHeight: '60%',
        padding: 30
    },
    header: {
        fontSize: 25,
        textAlign: 'center'
    }
})

export default connect()(NewDeck)