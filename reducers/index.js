import { GET_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions'

export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [
            ...state[action.deckId].questions,
            {
              question: action.question,
              answer: action.answer,
            },
          ],
        },
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
        ...state,
      }
    }
    default:
      return state
  }
}
