import React from 'react';
import { StyleSheet, Text, View, Dimensions, ListView } from 'react-native';
import Checklist from './Checklist'

export default class Home extends React.Component {

  render(){
    return(
      <View>
        <Text>This is the home screen</Text>
        <Text>This app will help you create a Health and Safety Site Visit report.</Text>
        <Checklist />
      </View>
    )
  }
}

const styles = StyleSheet.create({

});

//
// <Button
//   containerStyle={styles.button}
//   style={styles.buttonFont}>
//   New Report
// </Button>
//
// <Button
//   containerStyle={styles.button}
//   style={styles.buttonFont}>
//   Current Report
// </Button>
//
// <Button
//   containerStyle={styles.button}
//   style={styles.buttonFont}>
//   About Safe-As
// </Button>
//
// <NewReport />
//
// <Text>Check if you have the right PPE </Text>
// <Text>for the job you need to do.</Text>
