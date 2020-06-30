import { lightPink, lightGreen, lightBlue, lightYellow } from './colors'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'FlipToKnow:notifications'

export function getDecks(name = null) {
  const data = {
    React: {
      title: 'React',
      color: lightPink,
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
        },
      ],
    },
    JavaScript: {
      title: 'JavaScript',
      color: lightGreen,
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.',
        },
      ],
    },
    Cities: {
      title: 'Cities',
      color: lightBlue,
      questions: [
        {
          question: 'Which city has the tallest statue?',
          answer: 'Ahmedabad',
        },
        {
          question: 'The most densely populated city is?',
          answer: 'Tokyo',
        },
      ],
    },
    'COVID-19': {
      title: 'COVID-19',
      color: lightYellow,
      questions: [
        {
          question: 'For how long should you wash your hands?',
          answer: '20 seconds',
        },
        {
          question: 'How much distance should you maintain from others?',
          answer: '6 feet',
        },
      ],
    },
  }

  return name === null ? data : data[name]
}

export function clearNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  )
}

function createNotification() {
  return {
    title: 'Complete a quiz',
    body: "👋 Don't forget solve a quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync() /* To prevent setting more than 1 notifications */

            // Set a notification reminding to take a quiz at 8 am everyday
            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(8)
            tomorrow.setMinutes(0)

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            })

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}
