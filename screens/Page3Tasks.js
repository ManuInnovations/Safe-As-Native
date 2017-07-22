import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';
import { concat, _ } from 'lodash/concat';

import Page3TaskCheck from './Page3TaskCheck'

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
        {this.state.tasks.map((task, i) => {
            return(
              <Button style={styles.taskButton} key={i}>
                {task}

              </Button>
            )
          })
        }
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
  container: {

  },
  taskButton: {
    borderColor: '#5e6472',
    borderWidth: 1,
    color: '#5e6472',
    backgroundColor: 'white',
  }
})
