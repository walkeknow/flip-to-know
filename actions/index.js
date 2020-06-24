export const GET_DECKS = 'GET_DECKS'

export function receiveDecksAction(decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}
