import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HeaderText from './styles/HeaderText'
import BodyText from './styles/BodyText'

export default class About extends React.Component {

  render(){
    return(
      <View>
        <HeaderText>
          Safe As is a safety checklist application
        </HeaderText>
        <BodyText>
          Used to keep track and encourage safety checks
          for employees when they go to a construction site.
        </BodyText>
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
