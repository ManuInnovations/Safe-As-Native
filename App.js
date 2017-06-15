import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

import NavBar from './components/NavBar'
import NewReport from './components/NewReport'

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>

        <NavBar/>

        <Button
          containerStyle={styles.button}
          style={styles.buttonFont}>
          New Report
        </Button>

        <Button
          containerStyle={styles.button}
          style={styles.buttonFont}>
          Current Report
        </Button>

        <Button
          containerStyle={styles.button}
          style={styles.buttonFont}>
          About Safe-As
        </Button>

        <NewReport />

        <Text>Check if you have the right PPE </Text>
        <Text>for the job you need to do.</Text>
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
  button: {
    width: 280,
    margin: 10,
    padding:10,
    height:45,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'grey'
  },
  buttonFont: {
    fontSize: 20,
    color: 'white'
  }
});
