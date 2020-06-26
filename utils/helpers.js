import { lightPink, lightGreen, lightBlue, lightYellow } from './colors'

export function getDecks(name = null) {
  const data = {
    'React': {
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
    'JavaScript': {
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
    'Cities': {
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
