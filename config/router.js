import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import NavBar from '../screens/NavBar'

export const Tabs = TabNavigator ({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
    }
  },
})

export const Root = StackNavigator ({
  Tabs: {
    screen: Tabs,
  },
  Home: {
    screen: Home,
  },
})
