import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import NavBar from '../screens/NavBar'
import NewReport from '../screens/NewReport'
import About from '../screens/About'
import Page2PPEGear from '../screens/Page2PPEGear'
import Page3Tasks from '../screens/Page3Tasks'

export const NewReportStack = StackNavigator ({
  NewReportP1: {
    screen: NewReport,
  },
  NewReportP2:{
    screen: Page2PPEGear,
  },
  NewReportP3:{
    screen: Page3Tasks,
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
  },
  AboutSafeAs:{
    screen: About,
    navigationOptions:{
      tabBarLabel: 'About Safe-As'
    }
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
