import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

export default class NewReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.reportBox}>
      <Text>Your name:</Text>
      <TextInput style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Text>Site name:</Text>
      <TextInput style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reportBox: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    backgroundColor: 'grey',
    alignSelf: 'stretch',
    fontSize: 20,
    // width: 100,
  }
})
