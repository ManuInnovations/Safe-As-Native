import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checklist from './Checklist'
import HeaderText from './HeaderText'
import BodyText from './BodyText'

export default class Home extends React.Component {

  render(){
    return(
      <View>
        <HeaderText>This is the home screen</HeaderText>
        <BodyText>Safe-As will help you create a Health and Safety Site Visit report.</BodyText>
        <Text style={styles.subHeading}>Safety Checklist:</Text>
        <Checklist />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  bodyText: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 5,


  },
  subHeading: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
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
