import { GET_DECKS, ADD_DECK, REMOVE_DECK } from '../actions'

export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK: {
      return {
        ...state,
        [action.deck.title]: {
          title: action.deck.title,
          color: action.deck.color,
          questions: action.deck.questions,
        },
      }
    }
    case REMOVE_DECK: {
      delete state[action.deckId]
      return {
        ...state
      }
    }
    default:
      return state
  }
}
