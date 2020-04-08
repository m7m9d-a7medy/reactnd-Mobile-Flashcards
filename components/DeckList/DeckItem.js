import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const DeckItem = ({ title, cardCount }) => {
    const navigation = useNavigation()
    const clickHandler = () => {
        navigation.navigate('DeckView', { title, cardCount })
    }

    return (
        <TouchableOpacity style={styles.item} onPress={clickHandler}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cardCount}>{cardCount} cards</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        borderColor: '#eee',
        borderWidth: 2,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 25,
        fontWeight: '200'
    },
    cardCount: {
        color: '#999',
        marginTop: 5,
        fontSize: 18
    }
})

export default DeckItem