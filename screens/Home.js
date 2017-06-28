import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checklist from './Checklist'
import HeaderText from './styles/HeaderText'
import BodyText from './styles/BodyText'
import HomeButton from './HomeButton'

export default class Home extends React.Component {

  render(){
    return(
      <View>
        <HeaderText>
          Welcome to Safe-As
        </HeaderText>

        <BodyText>
          This app will help you create a Health and Safety Site Visit report.
        </BodyText>

        <Text style={styles.subHeading}>
          Safety Checklist:
        </Text>

        <Checklist style={styles.list} />
        <HomeButton />

      </View>

    )
  }
}

const styles = StyleSheet.create({
  subHeading: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    padding: 0,
    marginBottom: 10,
  },
  list: {
    backgroundColor: 'grey',
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