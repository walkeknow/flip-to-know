export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecksAction(decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}

export function addCardtoDeckAction({deckId, question, answer}) {
  return {
    type: ADD_CARD,
    deckId,
    question,
    answer,
  }
}

export function addDeckAction(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function removeDeckAction(deckId) {
  return {
    type: REMOVE_DECK,
    deckId,
  }
}
