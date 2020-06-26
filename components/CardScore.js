import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { dark, primary, white } from '../utils/colors'
import CustomButton from './CustomButton'

export default class CardScore extends Component {
  render() {
    const {
      color,
      score,
      totalCards,
      navigation,
      handleRestartQuiz,
      deckId,
    } = this.props
    const percentage = (score / totalCards) * 100
    let remark = ''
    if (percentage <= 35) {
      remark = 'You can do better!'
    } else if (percentage >= 75) {
      remark = 'You are a genius!'
    } else {
      remark = 'Great!'
    }
    return (
      <View style={[styles.card, { backgroundColor: color }]}>
        <View style={styles.scoreContainer}>
          <Text style={{ fontSize: 22, textAlign: 'center' }}>You Scored:</Text>
          <Text
            style={{
              fontSize: 57,
              textAlign: 'center',
              padding: 15,
              color: primary,
            }}
          >
            {score}/{totalCards}
          </Text>
          <Text style={{ fontSize: 22, textAlign: 'center' }}>{remark}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            color={white}
            handleSubmit={handleRestartQuiz}
            borderColor={dark}
            darkText={true}
          >
            Restart Quiz
          </CustomButton>
          <CustomButton
            color={dark}
            handleSubmit={() => navigation.navigate('View Deck', { deckId })}
          >
            Back to Deck
          </CustomButton>
        </View>
      </View>
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
  scoreContainer: {
    marginTop: 30,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 1,
    marginEnd: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 80,
  },
})
