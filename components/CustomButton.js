import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function CustomButton({ children, color }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 270,
    height: 75,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#ffffff',
  },
})
