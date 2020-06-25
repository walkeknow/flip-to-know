import { DATA_KEY, loadData } from './_decks'
import { AsyncStorage } from 'react-native'

export function receiveDecks() {
  return AsyncStorage.getItem(DATA_KEY).then(loadData)
}

export function addDeck({ title, color, questions }) {
  return AsyncStorage.mergeItem(
    DATA_KEY,
    JSON.stringify({
      [title]: {
        title,
        color,
        questions,
      },
    })
  )
}
