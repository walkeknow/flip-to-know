import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { dark, primary, green, red, darkGreen, darkRed } from '../utils/colors'
import CustomButton from './CustomButton'

export default class CardBack extends Component {
  handleCorrectPressed = () => {
    this.props.handleCorrectAnswer()
  }
  handleIncorrectPressed = () => {
    this.props.handleIncorrectAnswer()
  }
  render() {
    const { flipCard, color, cardNumber, totalCards, answer } = this.props
    return (
      <TouchableOpacity
        style={[styles.card, { backgroundColor: color }]}
        onPress={() => flipCard()}
      >
        <View style={styles.cardNumberContainer}>
          <Text style={styles.cardNumber}>{cardNumber}</Text>
          <Text style={styles.cardNumberTotal}>/{totalCards}</Text>
        </View>
        <View style={styles.answerContainer}>
          <Text style={{ fontSize: 32, textAlign: 'center', color: primary }}>
            Answer:
          </Text>
          <Text style={{ fontSize: 28, textAlign: 'center', padding: 10 }}>
            {answer}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            color={green}
            handleSubmit={this.handleCorrectPressed}
            borderColor={darkGreen}
          >
            Correct
          </CustomButton>
          <CustomButton
            borderColor={darkRed}
            color={red}
            handleSubmit={this.handleIncorrectPressed}
          >
            Incorrect
          </CustomButton>
        </View>
        <View style={styles.hintContainer}>
          <Text style={{ fontSize: 22, textAlign: 'center', color: dark }}>
            Tap for Question
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 400,
    flex: 1,
    marginTop: 40,
    marginBottom: 56,
    width: 320,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: dark,
  },
  cardNumberContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  cardNumber: {
    fontSize: 22,
    marginTop: 25,
    marginStart: 25,
    color: dark,
  },
  cardNumberTotal: {
    fontSize: 22,
    marginTop: 25,
    color: primary,
    fontWeight: '600',
  },
  answerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 1,
    marginEnd: 1,
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  hintContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 52,
  },
})
