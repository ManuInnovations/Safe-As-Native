import React from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'

import Home from '../screens/Home'
// import HomeScreen from '../screens/HomeScreen2'
import DrawerButton from './drawerButton'
import NavBar from '../screens/NavBar'
import NewReport from '../screens/NewReport'
import About from '../screens/About'
import Page2PPEGear from '../screens/Page2PPEGear'

export const NewReportStack = StackNavigator ({
  NewReportP1: {
    screen: NewReport,
  },
  NewReportP2:{
    screen: Page2PPEGear,
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
    navigationOptions: {
      header: navigation =>({
        title: 'Hamburger',
        left: <DrawerButton navigation={navigation} />,
      })
    },
  },
})

export const MainNavigator = DrawerNavigator({
  Home: {
    screen: Root,
  },
});
