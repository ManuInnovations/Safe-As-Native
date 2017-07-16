import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

export default class page3Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: '',
    };
  }

  onTextChange = (tasks) =>{
    console.log('this is the task', tasks);
    // this.setState({ tasks })
  }

  goToNextPage = (user) => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is the tasks
        </Text>
        <TextInput
          onChangeText={(tasks) => this.setState({tasks})}
          value={this.state.tasks}
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
  reportBox: {

  },
  container: {

  }
})
