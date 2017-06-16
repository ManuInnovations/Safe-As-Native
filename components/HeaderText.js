import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BodyText from './BodyText'

export default class HeaderText extends React.Component {
  render() {
    return(
    <BodyText>
      <Text style={{fontSize: 20}}>
        {this.props.children}
      </Text>
    </BodyText>
    )
  }
}
