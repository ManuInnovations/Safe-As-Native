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
      <View style={styles.container}>
      <Text>
        Personal Protective Clothing & Equipment (PPE)
      </Text>
      <Text>
        Select gear you currently have:
      </Text>
      <Text>
        Safety Boots:
      </Text>
      <Text>
        High visibility vest:
      </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  reportBox: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
})
