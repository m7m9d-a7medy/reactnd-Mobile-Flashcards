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
            </Animated.View>
            <Animated.View style={[styles.cardSide, styles.backSide, { transform: [{ rotateY: bsRotVal }] }]}>
                <Text>{answer}</Text>
            </Animated.View>
            <TextButton onPress={pressed}>
                {isFront ? 'Answer' : 'Question'}
            </TextButton>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardSide: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '50%',
        flex: 1,
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