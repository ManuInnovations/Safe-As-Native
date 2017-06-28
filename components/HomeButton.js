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
      <Button>
          Create a New Report
      </Button>
    );
  }
};

// containerStyle={{padding:10, height:40, borderRadius:4, backgroundColor: 'green', flex: .5, marginBottom: 10}}
// style={{fontSize: 20, color: 'white',}}>
