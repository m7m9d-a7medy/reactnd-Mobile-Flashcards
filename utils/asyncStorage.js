import { AsyncStorage } from 'react-native'
import _DATA from './_DATA'
import { newEntry } from './helpers'

const FLASHCARDS_KEY = 'FLASHCARDS_KEY'

export const saveMockData = (decks = _DATA) => {
    return AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(decks))
}

export const getDecks = () => {
    return AsyncStorage.getItem(FLASHCARDS_KEY)
        .then(JSON.parse)
}

export const getDeck = deckTitle => {
    return getDecks()
        .then(result => result[deckTitle])
}

export const saveDeckTitle = title => {
    getDecks()
        .then(result => {
            result[title] = newDeck
            result[title].title = title

            AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(result))
                .catch(err => console.warn(err))
        })
        .catch(err => console.warn(err))
}

export const addCardToDeck = (deckTitle, card) => {
    const { question, answer } = card
    const entry = newEntry(question, answer)

    return getDecks()
        .then(result => {
            result[deckTitle].questions.push(entry)

            AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(result))
                .catch(err => console.warn(err))
            
            return entry
        })
        .catch(err => console.warn(err))
}