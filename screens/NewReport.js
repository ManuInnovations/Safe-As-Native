import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

export default class NewReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  goToNextPage = (user) => {
    this.props.navigation.navigate('NewReportP2');
  };

  render() {
    return (
      <View style={styles.container}>
          <Text >Your name:</Text>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        <Button
          onPress={() => this.goToNextPage()}
        >
          Next
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
})
