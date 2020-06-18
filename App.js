import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabNav from './components/TabNav'
import { light } from './utils/colors'
import ViewDeck from './components/ViewDeck'
import AddCard from './components/AddCard'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: light,
        },
      })}
      >
        {/* <Stack.Screen name='Home' component={TabNav} /> */}
        {/* <Stack.Screen name='View Deck' component={ViewDeck} /> */}
        <Stack.Screen name='Add Card' component={AddCard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}