import { SAVE_DECKS, GET_DECKS, GET_DECK, SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from './actions'
import { newDeck, newEntry } from '../utils/_DATA'

const saveDecks = (state, action) => action.decks

const saveDeckTitle = (state, action) => {
    const { deckTitle } = action
    const deck = newDeck(deckTitle)

    return {
        ...state,
        [deckTitle]: deck
    }
}

const addCardToDeck = (state, action) => {
    const { card, deckTitle } = action
    const { question, answer } = card
    const entry = newEntry(question, answer)
    
    return {
        ...state,
        [deckTitle]: {
            ...state[deckTitle],
            questions: state[deckTitle].questions.concat([entry])
        }
    }
}

export default (state = {}, action) => {
    switch (action.type) {
        case SAVE_DECKS:
            return saveDecks(state, action)

        case SAVE_DECK_TITLE:
            return saveDeckTitle(state, action)

        case ADD_CARD_TO_DECK:
            return addCardToDeck(state, action)

        default:
            return state
    }
}