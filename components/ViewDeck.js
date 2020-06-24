import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { DATA } from '../utils/data'
import CustomButton from './CustomButton'
import { dark, white, red, primary } from '../utils/colors'
import { connect } from 'react-redux'

class ViewDeck extends Component {
  // todo:
  // handle delete deck
  // redirect to home
  handleDeleteDeck = () => {
    this.props.navigation.goBack()
  }
  render() {
    const { deck } = this.props
    console.log('DECK', deck)
    return (
      <View style={styles.deckContainer}>
        <View style={[styles.deck, { backgroundColor: deck.color }]}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={this.handleDeleteDeck}>
              <FontAwesome name='trash' size={29} color={red} />
            </TouchableOpacity>
          </View>
          <View style={styles.deckText}>
            <Text style={styles.deckTitle}>{deck.title}</Text>
            <Text style={styles.deckDesc}>{deck.questions.length} Cards</Text>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              borderColor={dark}
              color={white}
              darkText={true}
              handleSubmit={() => this.props.navigation.navigate('Add Card')}
            >
              Add Card
            </CustomButton>
            <CustomButton
              color={dark}
              handleSubmit={() =>
                this.props.navigation.navigate('Quiz', { deckId: deck.title })
              }
            >
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
    padding: 2,
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
    alignItems: 'center',
  },
  deckTitle: {
    fontSize: 60,
    color: primary,
  },
  deckDesc: {
    fontSize: 22,
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 80,
  },
})

function mapStateToProps(state, { route }) {
  const { deckId } = route.params
  return {
    deck: Object.values(state).filter((object) => object.title === deckId)[0],
  }
}

export default connect(mapStateToProps)(ViewDeck)
