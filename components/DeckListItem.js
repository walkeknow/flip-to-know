import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function DeckListItem({ title, color }) {
  console.log(title, color)
  return (
    <TouchableOpacity style={[styles.deckItem, { backgroundColor: color }]}>
      <Text style={styles.deckTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  deckItem: {
    width: 140,
    height: 120,
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
