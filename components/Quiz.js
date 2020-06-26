import React, { Component } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { DATA } from '../utils/data'
import CardFlip from 'react-native-card-flip'
import CardFront from './CardFront'
import CardBack from './CardBack'
import Score from './CardScore'
import { connect } from 'react-redux'

class Quiz extends Component {
  componentDidMount() {
    const { deck } = this.props
    this.setState(() => ({
      color: deck.color,
      questions: deck.questions,
      cardNumber: 1,
      currentQuestion: deck.questions[0].question,
      currentAnswer: deck.questions[0].answer,
      loadingNewQuestion: false,
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
  handleLoadingNewQuestion() {
    setTimeout(
      () => this.setState(() => ({ loadingNewQuestion: false })),
      1000
    )
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
          loadingNewQuestion: true,
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
    this.handleLoadingNewQuestion()
  }
  handleIncorrectAnswer = () => {
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
          loadingNewQuestion: true,
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
    this.handleLoadingNewQuestion()
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
      loadingNewQuestion,
    } = this.state
    const { deck, navigation } = this.props
    const totalCards = questions.length
    if (displayScore === true) {
      return (
        <View style={styles.quizContainer}>
          <Score
            color={color}
            score={score}
            totalCards={totalCards}
            navigation={navigation}
            handleRestartQuiz={this.handleRestartQuiz}
            deckId={deck.title}
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
            loadingNewQuestion={loadingNewQuestion}
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

function mapStateToProps(state, { route }) {
  const { deckId } = route.params
  return {
    deck: Object.values(state).filter((object) => object.title === deckId)[0],
  }
}

export default connect(mapStateToProps)(Quiz)
