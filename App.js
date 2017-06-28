import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';
// import NavBar from './components/NavBar'
import Home from './components/Home'
// import App from './components/App'
// import HomeButton from './components/HomeButton'
// const MainScreen = ({ navigation }) => (
//   <View>
//   <Text>Hello</Text>
//   </View>
// )
const AppRoutes = StackNavigator({
  Home: {screen: Home}
});

export default () => <AppRoutes />
