import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { DATA } from '../utils/data'
import CustomButton from './CustomButton'
import { dark } from '../utils/colors'
import CustomInput from './CustomInput'
import { connect } from 'react-redux'

class AddCard extends Component {
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
  handleSubmit = () => {
    const { question, answer } = this.state
    if (question === '' || answer === '') Alert.alert('Please fill both fields!')
    else {
      this.props.navigation.goBack()
    }
  }
  render() {
    const { deck } = this.props
    return (
      <View style={styles.deckContainer}>
        <View style={[styles.deck, { backgroundColor: deck.color }]}>
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

function mapStateToProps(state, { route }) {
  const { deckId } = route.params
  return {
    deck: Object.values(state).filter((object) => object.title === deckId)[0],
  }
}

export default connect(mapStateToProps)(AddCard)
