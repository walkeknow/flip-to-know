import { DATA_KEY, loadData } from './_decks'
import { AsyncStorage } from 'react-native'

export function receiveDecks() {
  return AsyncStorage.getItem(DATA_KEY).then(loadData)
}

export function addCardToDeck({ deckId, question, answer }) {
  return AsyncStorage.getItem(DATA_KEY).then((result) => {
    const data = JSON.parse(result)
    AsyncStorage.mergeItem(
      DATA_KEY,
      JSON.stringify({
        ...data,
        [deckId]: {
          ...data[deckId],
          questions: [
            ...data[deckId].questions,
            {
              question: question,
              answer: answer,
            },
          ],
        },
      })
    )
  })
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

export function removeDeck(deckId) {
  return AsyncStorage.getItem(DATA_KEY).then((result) => {
    const data = JSON.parse(result)
    data[deckId] = undefined
    delete data[deckId]
    AsyncStorage.setItem(DATA_KEY, JSON.stringify(data))
  })
}
