import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';
import { concat, _ } from 'lodash/concat'

const taskList=[]

export default class page3Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[],
    };
  }


  pushTask = () =>{
    taskList.push(this.state.task)
    this.setState({
      tasks: taskList
    })
    console.log(taskList);
    console.log(this.state.tasks);
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
          onChangeText={(task) => this.setState({task})}
          value={this.state.task}
        />
        <Button
          onPress={() => this.pushTask()}>
          Submit
        </Button>
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
