import React, { useRef, useState } from 'react'
import { StyleSheet, Animated, View, Text } from 'react-native'
import TextButton from '../UI/TextButton'
import { Easing } from 'react-native-reanimated'

const QuestionCard = ({ question, answer }) => {
    const rotateAnim = useRef(new Animated.Value(0)).current
    const [isFront, setIsFront] = useState(true)

    const pressed = () => {

        Animated.timing(rotateAnim, {
            toValue: isFront ? 1 : 0,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: true
        })
            .start(() => setIsFront(isFront => !isFront))
    }

    let fsRotVal = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-180deg']
    })
    let bsRotVal = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '0deg']
    })

    return (
        <View style={styles.card}>
            <Animated.View style={[styles.cardSide, styles.frontSide, { transform: [{ rotateY: fsRotVal }] }]}>
                <Text>{question}</Text>
                <Text onPress={pressed}>
                    Answer
                </Text>
            </Animated.View>
            <Animated.View style={[styles.cardSide, styles.backSide, { transform: [{ rotateY: bsRotVal }] }]}>
                <Text>{answer}</Text>
                <Text onPress={pressed}>
                    Question
                </Text>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },
    cardSide: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
        backfaceVisibility: 'hidden'
    },
    frontSide: {
        backgroundColor: 'red'
    },
    backSide: {
        backgroundColor: 'blue',
        transform: [
            { rotateY: '180deg' }
        ]
    }
})

export default QuestionCard