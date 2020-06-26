export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK ='REMOVE_DECK'

export function receiveDecksAction(decks) {
  return {
    type: GET_DECKS,
    decks,
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
