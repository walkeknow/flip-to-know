import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { DATA } from '../utils/helpers'
import CustomButton from './CustomButton'
import { dark } from '../utils/colors'
import CustomInput from './CustomInput'

export default class AddCard extends Component {
  // todo
  // redirect to home
  state = {
    question: '',
    answer: '',
  }
  handleQuestionInput = (query) => {
    this.setState(() => ({
      question: query,
    }))
  }
  handleAnswerInput = (query) => {
    this.setState(() => ({
      answer: query,
    }))
  }
  handleSubmit = () => {}
  render() {
    const DeckObj = Object.values(DATA)[0]
    return (
      <View style={styles.deckContainer}>
        <View style={[styles.deck, { backgroundColor: DeckObj.color }]}>
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <Text style={styles.label}>Enter Question</Text>
              <CustomInput
                value={this.state.query}
                handleInput={this.handleQuestionInput}
                inCard={true}
              ></CustomInput>
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>Enter Answer</Text>
              <CustomInput
                value={this.state.query}
                handleInput={this.handleAnswerInput}
                inCard={true}
                multiline={true}
              ></CustomInput>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton color={dark} handleSubmit={this.handleSubmit}>
              Submit
            </CustomButton>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deck: {
    flex: 1,
    marginTop: 40,
    marginBottom: 56,
    width: 320,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1.5,
    marginVertical: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  label: {
    fontSize: 22,
    marginVertical: 18,
  },
})
