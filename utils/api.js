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

export function removeDeck(id) {
  return AsyncStorage.getItem(DATA_KEY).then((result) => {
    const data = JSON.parse(result)
    data[id] = undefined
    delete data[id]
    AsyncStorage.setItem(DATA_KEY, JSON.stringify(data))
  })
}
