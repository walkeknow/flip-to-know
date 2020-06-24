import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import DeckListItem from './DeckListItem'
import { background } from '../utils/colors'
import { receiveDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecksAction } from '../actions'

class DeckList extends Component {
  componentDidMount() {
    receiveDecks().then((decks) => {
      this.props.dispatch(receiveDecksAction(decks))
    })
  }
  render() {
    const { navigation, decks } = this.props

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Select a Deck</Text>
        </View>
        <FlatList
          data={decks}
          style={styles.deckList}
          numColumns={2}
          renderItem={({ item }) => (
            <DeckListItem
              cards={item.questions.length}
              title={item.title}
              color={item.color}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
    padding: 20,
    fontSize: 20,
  },
})

function mapStateToProps(state) {
  return {
    decks: Object.values(state),
  }
}

export default connect(mapStateToProps)(DeckList)
