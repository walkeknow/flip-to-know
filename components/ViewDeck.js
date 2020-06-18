import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { DATA } from '../utils/helpers'
import CustomButton from './CustomButton'
import { dark, white, red, primary } from '../utils/colors'

export default class ViewDeck extends Component {
  // todo: 
  // handle delete deck
  // redirect to home
  handleSubmit = () => {}
  render() {
    const Deckobj = Object.values(DATA)[0]
    console.log(Deckobj)
    return (
      <View style={styles.deckContainer}>
        <View style={[styles.deck, { backgroundColor: Deckobj.color }]}>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <FontAwesome name='trash' size={29} color={red} />
            </TouchableOpacity>
          </View>
          <View style={styles.deckText}>
            <Text style={styles.deckTitle}>React</Text>
            <Text style={styles.deckDesc}>2 Cards</Text>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              borderColor={dark}
              color={white}
              handleSubmit={this.handleSubmit}
            >
              Add Card
            </CustomButton>
            <CustomButton color={dark} handleSubmit={this.handleSubmit}>
              Start Quiz
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
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 20,
    flex: 1,
  },
  deckText: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTitle: {
    fontSize: 60,
    color: primary
  },
  deckDesc: {
    fontSize: 22
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 80,
  },
})
