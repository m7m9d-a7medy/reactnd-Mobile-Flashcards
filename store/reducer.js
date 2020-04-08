import { SAVE_DECKS, GET_DECKS, GET_DECK, SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from './actions'

export default (state = {}, action) => {
    switch (action.type) {
        case SAVE_DECKS:
            return { ...state }

        case GET_DECKS:
            return { ...state }

        case GET_DECK:
            return { ...state }

        case SAVE_DECK_TITLE:
            return { ...state }

        case ADD_CARD_TO_DECK:
            return { ...state }

        default:
            return state
    }
}