import { SAVE_DECKS, GET_DECKS, GET_DECK, SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from './actions'
import { newDeck, newEntry } from '../utils/helpers'

const saveDecks = (state, action) => action.decks

const saveDeckTitle = (state, action) => {
    const { deck } = action

    return {
        ...state,
        [deck.title]: deck
    }
}

const addCardToDeck = (state, action) => {
    const { entry, deckTitle } = action
    
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