import _DATA from '../utils/_DATA'

export const SAVE_DECKS = 'SAVE_DECKS'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export const saveDecks = (decks = _DATA) => ({
    type: SAVE_DECKS,
    decks,
})

export const saveDeckTitle = deckTitle => ({
    type: SAVE_DECK_TITLE,
    deckTitle,
})

export const addCardToDeck = (deckTitle, card) => ({
    type: SAVE_DECK_TITLE,
    deckTitle,
    card,
})