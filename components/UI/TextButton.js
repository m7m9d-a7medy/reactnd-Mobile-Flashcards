import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const TextButton = ({ children, onPress, ...props }) => {
    const { disabled } = props
    onPress = disabled ? () => null : onPress

    return (
        <TouchableOpacity
            style={[styles.button]}
            onPress={onPress}
            {...props}
        >
            <Text style={[styles.text]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        width: '50%',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        fontSize: 25,
    },
    text: {
        textAlign: 'center',
        color: '#000',
        fontSize: 22,
    }
})

export default TextButton