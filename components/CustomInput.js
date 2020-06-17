import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function CustomInput({value, handleInput}) {
  return <TextInput
    style={styles.input}
    value={value}
    onChangeText={text => handleInput(text)}
  />
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 310,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 22,
    padding: 10,
  },
})
