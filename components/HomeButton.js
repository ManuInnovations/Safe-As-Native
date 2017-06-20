import React, { Component } from 'react'
import Button from 'react-native-button'

export default class HomeButton extends Component {
  constructor(props, context) {
    super(props, context);
  }
  _handlePress() {
    console.log('HomePage button Pressed!');
  }
  render() {
    return (
      <Button
        containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
        style={{fontSize: 20, color: 'green'}}>
          Create a New Report
      </Button>
    );
  }
};
