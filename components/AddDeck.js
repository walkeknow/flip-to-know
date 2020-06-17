import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import {
  background,
  lightPink,
  lightYellow,
  lightGreen,
  lightBlue,
  dark,
  primary,
} from '../utils/colors'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'

function ColorPicker({ color, handleSelect, selectedColor }) {
  return (
    <TouchableOpacity
      onPress={() => handleSelect(color)}
      style={[
        styles.colorItem,
        { backgroundColor: color },
        selectedColor === color && styles.selectedItem,
      ]}
    />
  )
}

export default class AddDeck extends Component {
  state = {
    query: null,
    selectedColor: 'lightPink',
  }
  handleInput = (query) => {
    this.setState(() => ({
      query,
    }))
  }
  handleSelect = (color) => {
    this.setState(() => ({
      selectedColor: color,
    }))
  }
  render() {
    const colors = [lightPink, lightYellow, lightGreen, lightBlue]
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.header}>Enter Deck Title</Text>
          <CustomInput
            handleInput={this.handleInput}
            value={this.state.query}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.header}>Choose Color</Text>
          <FlatList
            data={colors}
            numColumns={2}
            renderItem={({ item }) => (
              <ColorPicker
                color={item}
                selectedColor={this.state.selectedColor}
                handleSelect={this.handleSelect}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
        <View style={styles.inputContainer}>
          <CustomButton color={dark}>Submit</CustomButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    margin: 28,
  },
  colorItem: {
    width: 65,
    height: 65,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 65,
    margin: 8,
  },
  selectedItem: {
    borderWidth: 5,
    borderColor: primary,
  },
})
