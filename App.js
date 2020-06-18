import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabNav from './components/TabNav'
import { light } from './utils/colors'
import ViewDeck from './components/ViewDeck'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: light,

        },
        title: route.name === 'Deck' && ''
      })}
      >
        {/* <Stack.Screen name='Home' component={TabNav} /> */}
        <Stack.Screen name='Deck' component={ViewDeck} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}