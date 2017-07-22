import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BodyText extends React.Component {
  render() {
    return(
      <Text style={styles.body}>
          {this.props.children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    textAlign: 'center',
    color: '#5e6472',
    padding: 10,
  },
})
