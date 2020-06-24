import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { dark, primary } from '../utils/colors'

export default function CardFront({
  flipCard,
  color,
  cardNumber,
  totalCards,
  question,
}) {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: color }]}
      onPress={() => flipCard()}
    >
      <View style={styles.cardNumberContainer}>
        <Text style={styles.cardNumber}>{cardNumber}</Text>
        <Text style={styles.cardNumberTotal}>/{totalCards}</Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={{ fontSize: 32, textAlign: 'center', color: primary }}>
          Question:
        </Text>
        <Text style={{ fontSize: 42, textAlign: 'center' }}>{question}</Text>
      </View>
      <View style={styles.hintContainer}>
        <Text style={{ fontSize: 22, textAlign: 'center', color: dark }}>
          Tap card for Answer
        </Text>
      </View>
    </TouchableOpacity>
  )
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
    padding: 2,
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
  questionContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hintContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 52,
  },
})
