import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import NavBar from '../screens/NavBar'
import NewReport from '../screens/NewReport'

export const NewReportStack = StackNavigator ({
  NewReportP1: {
    screen: NewReport,
  },
})

export const Tabs = TabNavigator ({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  NewReport: {
    screen: NewReportStack,
    navigationOptions: {
      tabBarLabel: 'New Report',
    },
  }
})

export const Root = StackNavigator ({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      title: 'Safe As',
    },
  },
  Home: {
    screen: Home,
  },
})
