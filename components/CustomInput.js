import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { white } from '../utils/colors'

export default function CustomInput({ value, handleInput, inCard, multiline }) {
  return (
    <TextInput
      style={[
        styles.input,
        { width: inCard === true ? 270 : 310 },
        multiline === true && { paddingTop: 20 },
      ]}
      value={value}
      onChangeText={(text) => handleInput(text)}
      multiline={multiline}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 22,
    padding: 10,
    backgroundColor: white,
  },
})
