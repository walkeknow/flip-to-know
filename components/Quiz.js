import React, { Component } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { DATA } from '../utils/helpers'
import CardFlip from 'react-native-card-flip'
import CardFront from './CardFront'
import CardBack from './CardBack'
import Score from './CardScore'

export default class Quiz extends Component {
  componentDidMount() {
    const DeckObj = Object.values(DATA)[0]
    console.log(DeckObj)
    this.setState(() => ({
      color: DeckObj.color,
      questions: DeckObj.questions,
      cardNumber: 1,
      currentQuestion: DeckObj.questions[0].question,
      currentAnswer: DeckObj.questions[0].answer,
    }))
  }
  state = {
    color: '',
    questions: [],
    cardNumber: null,
    score: 0,
    currentQuestion: '',
    currentAnswer: '',
    displayScore: false,
  }
  flipCard = () => {
    this.card.flip()
  }
  handleRestartQuiz = () => {
    this.setState(({ questions }) => ({
      cardNumber: 1,
      currentQuestion: questions[0].question,
      currentAnswer: questions[0].answer,
      score: 0,
      displayScore: false,
    }))
  }
  handleCorrectAnswer = () => {
    console.log('correct', this.state)
    const totalCards = this.state.questions.length
    this.setState(({ cardNumber, score, questions }) => {
      if (cardNumber < totalCards) {
        this.flipCard()
        const question = questions[cardNumber].question
        const answer = questions[cardNumber].answer
        return {
          cardNumber: (cardNumber += 1),
          score: (score += 1),
          currentQuestion: question,
          currentAnswer: answer,
        }
      } else {
        Alert.alert('Quiz complete!', '', [
          {
            text: 'View Score',
            onPress: () =>
              this.setState(() => ({
                displayScore: true,
                score: (score += 1),
              })),
          },
        ])
      }
    })
  }
  handleIncorrectAnswer = () => {
    console.log('incorrect', this.state)
    const totalCards = this.state.questions.length
    this.setState(({ cardNumber, questions }) => {
      if (cardNumber < totalCards) {
        this.flipCard()
        const question = questions[cardNumber].question
        const answer = questions[cardNumber].answer
        return {
          cardNumber: (cardNumber += 1),
          currentQuestion: question,
          currentAnswer: answer,
        }
      } else {
        Alert.alert('Quiz complete!', '', [
          {
            text: 'View Score',
            onPress: () => this.setState(() => ({ displayScore: true })),
          },
        ])
      }
    })
  }
  render() {
    const {
      questions,
      color,
      cardNumber,
      currentQuestion,
      currentAnswer,
      score,
      displayScore,
    } = this.state
    const totalCards = questions.length
    if (displayScore === true) {
      return (
        <View style={styles.quizContainer}>
          <Score
            color={color}
            score={this.state.score}
            totalCards={totalCards}
            navigation={this.props.navigation}
            handleRestartQuiz={this.handleRestartQuiz}
          />
        </View>
      )
    }
    return (
      <View style={styles.quizContainer}>
        <CardFlip
          perspective={950}
          style={styles.cardContainer}
          ref={(card) => (this.card = card)}
        >
          <CardFront
            color={color}
            totalCards={totalCards}
            cardNumber={cardNumber}
            question={currentQuestion}
            flipCard={this.flipCard}
          />
          <CardBack
            color={color}
            totalCards={totalCards}
            cardNumber={cardNumber}
            answer={currentAnswer}
            flipCard={this.flipCard}
            handleCorrectAnswer={this.handleCorrectAnswer}
            handleIncorrectAnswer={this.handleIncorrectAnswer}
          />
        </CardFlip>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    marginTop: 40,
    marginBottom: 40,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
