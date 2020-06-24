import { DATA_KEY, loadData } from './_decks'
import { AsyncStorage } from 'react-native'

export function receiveDecks() {
  return AsyncStorage.getItem(DATA_KEY).then(loadData)
}
