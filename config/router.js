import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import NavBar from '../screens/NavBar'
import NewReport from '../screens/NewReport'

// export const NewReport = StackNavigator ({
//   NewReportP1: {
//     screen: NewReport,
//   },
// })

export const Tabs = TabNavigator ({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
    }
  },
  NewReport: {
    screen: NewReport,
    navigationOptions: {
      tabBarLabel: 'New Report',
    },
  }
})

export const Root = StackNavigator ({
  Tabs: {
    screen: Tabs,
  },
  Home: {
    screen: Home,
  },
})
