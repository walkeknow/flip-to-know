import {
  lightPink,
  lightGreen,
  lightBlue,
  lightYellow,
} from './colors'

export const DATA = {
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
  Color: {
    title: 'Color',
    color: lightBlue,
    questions: [
      {
        question: 'Favorite color?',
        answer: 'Blue',
      },
    ],
  },
  Car: {
    title: 'Car',
    color: lightYellow,
    questions: [
      {
        question: 'Favorite car?',
        answer: 'Mercedes',
      },
    ],
  },
}
