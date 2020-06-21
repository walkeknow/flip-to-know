import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function CustomButton({
  children,
  color,
  handleSubmit,
  borderColor,
  darkText,
}) {
  return (
    <TouchableOpacity
      onPress={() => handleSubmit()}
      style={[
        styles.button,
        { backgroundColor: color },
        borderColor && { borderColor: borderColor, borderWidth: 3 },
      ]}
    >
      <Text style={[styles.buttonText, darkText === true && {color: '#000000'}]}>{children}</Text>
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
