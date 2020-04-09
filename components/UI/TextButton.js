import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const TextButton = ({ children, onPress, variant, ...props }) => {
    const { disabled } = props
    onPress = disabled ? () => null : onPress

    let style = {}

    switch (variant) {
        case 'red':
            style = {
                btn: {
                    backgroundColor: '#e74c3c',
                    borderColor: '#c0392b'
                },
                text: {
                    color: '#fff'
                }
            }
            break

        case 'green':
            style = {
                btn: {
                    backgroundColor: '#2ecc71',
                    borderColor: '#27ae60'
                },
                text: {
                    color: '#fff'
                }
            }
            break

        case 'black':
            style = {
                btn: {
                    backgroundColor: '#000',
                    borderColor: '#fff'
                },
                text: {
                    color: '#fff'
                }
            }
            break

        default:
            style = {
                btn: {
                    backgroundColor: '#fff',
                    borderColor: '#000',
                },
                text: {
                    color: '#000',
                }
            }
    }

    return (
        <TouchableOpacity
            style={[styles.button, style.btn]}
            onPress={onPress}
            {...props}
        >
            <Text style={[styles.text, style.text]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        maxWidth: '80%',
        minWidth: 250,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 25,
    },
    text: {
        textAlign: 'center',
        fontSize: 22,
    }
})

export default TextButton