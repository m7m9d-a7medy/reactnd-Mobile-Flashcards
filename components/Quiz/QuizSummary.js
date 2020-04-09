import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextButton from '../UI/TextButton'

const QuizSummary = ({ navigation, route }) => {
    navigation.setOptions({
        
    })
    const { score, title, total } = route.params
    
    const handleNavigation = route => {

        navigation.push(route, { title })
    }

    return (
        <SafeAreaView>
            <Text style={styles.mainText}>Score: {score}/{total}</Text>
            <TextButton onPress={() => handleNavigation('QuizView')}>
                Restart Quiz
            </TextButton>
            <TextButton onPress={() => handleNavigation('DeckView')}>
                Back to deck
            </TextButton>
        </SafeAreaView>
    )
}

export default QuizSummary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    }
})
