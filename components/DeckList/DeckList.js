import React from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DeckItem from './DeckItem'
import { connect } from 'react-redux'

const DeckList = ({ deckItems, navigation, route }) => {
    // console.log(deckItems)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <FlatList
                data={deckItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <DeckItem title={item.title} cardCount={item.cardCount} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const mapStateToProps = decks => {
    const deckItems = Object.keys(decks).map(title => ({
        id: decks[title].id,
        title,
        cardCount: decks[title].questions.length
    }))

    return { deckItems }
}

export default connect(mapStateToProps)(DeckList)