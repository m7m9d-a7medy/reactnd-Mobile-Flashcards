import _DATA from '../utils/_DATA'
import * as Storage from '../utils/asyncStorage'

export const SAVE_DECKS = 'SAVE_DECKS'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export const saveDecks = (decks = _DATA) => dispatch => {
    Storage.saveMockData(decks)
        .then(() => dispatch({
            type: SAVE_DECKS,
            decks,
        }))
}

export const saveDeckTitleAction = title => dispatch => {
    Storage.saveDeckTitle(title)
        .then(deck => dispatch({
            type: SAVE_DECK_TITLE,
            deck,
        }))
}

export const addCardToDeckAction = (deckTitle, card) => dispatch => {
    Storage.addCardToDeck(deckTitle, card)
        .then(entry => dispatch({
            type: ADD_CARD_TO_DECK,
            deckTitle,
            entry,
        }))
}