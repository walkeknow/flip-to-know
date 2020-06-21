import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function DeckListItem({ title, color, cards, navigation }) {
  return (
    <TouchableOpacity
      style={[styles.deckItem, { backgroundColor: color }]}
      onPress={() => navigation.navigate('View Deck')}
    >
      <Text style={styles.deckTitle}>{title}</Text>
      <Text>
        {cards} {cards === 1 ? 'Card' : 'Cards'}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  deckItem: {
    width: 150,
    height: 140,
    margin: 10,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckTitle: {
    fontSize: 20,
    margin: 10,
  },
})
