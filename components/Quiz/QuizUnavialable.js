import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextButton from '../UI/TextButton'
import { useNavigation } from '@react-navigation/native'

const QuizUnavilable = () => {
    const navigation = useNavigation()

    const navigationHandler = () => navigation.goBack()

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ margin: 20, fontSize: 25, textAlign: 'center' }}>
            Unable to start a quiz on this deck, please add cards to the deck</Text>
            <TextButton onPress={navigationHandler}>
                Go back
            </TextButton>
        </SafeAreaView>
    )
}

export default QuizUnavilable