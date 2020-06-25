import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabNav from './components/TabNav'
import { light, accent, dark } from './utils/colors'
import ViewDeck from './components/ViewDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import reducer from './reducers'
import logger from './middleware/logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

const Stack = createStackNavigator()

const store = createStore(reducer, applyMiddleware(logger))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar translucent barStyle='dark-content' />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={() => ({
              headerStyle: {
                backgroundColor: light,
              },
              headerTintColor: accent,
              headerTitleStyle: {
                color: 'black',
              },
            })}
          >
            <Stack.Screen name='Home' component={TabNav} />
            <Stack.Screen name='View Deck' component={ViewDeck} />
            <Stack.Screen name='Add Card' component={AddCard} />
            <Stack.Screen name='Quiz' component={Quiz} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
