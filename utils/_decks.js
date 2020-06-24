import { AsyncStorage } from 'react-native'
import { getDecks } from './helpers'

export const DATA_KEY = 'MobileFlashcards:decks'

function setDummyData() {
  const DummyData = getDecks()
  return AsyncStorage.setItem(DATA_KEY, JSON.stringify(DummyData))
}

export function loadData(data) {
  return data === null ? setDummyData() : JSON.parse(data)
}
