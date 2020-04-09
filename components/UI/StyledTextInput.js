import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const StyledTextInput = props => {
    return (
        <TextInput {...props} style={styles.textInput} />
    )
}

const styles = StyleSheet.create({
    textInput: {
        padding: 12,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 10,
        fontSize: 20,
        maxWidth: 600
    }
})

export default StyledTextInput