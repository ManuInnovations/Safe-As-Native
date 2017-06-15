import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

import NavBar from './components/NavBar'
import Home from './components/Home'

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <NavBar/>

        <Home />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
