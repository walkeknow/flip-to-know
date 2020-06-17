import React from 'react'
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { accent, light } from '../utils/colors'

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator()

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = null
          if (route.name === 'Take Quiz') {
            iconName = 'question-circle'
            return <FontAwesome name={iconName} size={size} color={color} />
          } else if (route.name === 'Add Deck') {
            if (Platform.OS === 'ios') iconName = 'ios-add-circle'
            else iconName = 'md-add-circle'
            return <Ionicons name={iconName} size={size} color={color} />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: accent,
        style: {
          backgroundColor: light,
        },
      }}
    >
      <Tab.Screen name='Take Quiz' component={DeckList} />
      <Tab.Screen name='Add Deck' component={AddDeck} />
    </Tab.Navigator>
  )
}
