import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Home from '../screens/Home'

export const Root = StackNavigator ({
  Home: {
    screen: Home,
  },
})
