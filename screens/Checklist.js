import React from 'react';
import { StyleSheet, Text, View, Dimensions, ListView, Picker } from 'react-native';

export default class Home extends React.Component {
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(
        ['I know the site contact details',
        'I need a site escort',
        'I know where emergency exits are',
        'I have had the right safety training',
        'I have the correct PPE',
        'I have the correct tools for the job',
        'I need to let someone know where I am'
      ]),
    };
    console.log('this.state', this.state);
  }
  render(){
    return(
       <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View>
            <Text style={styles.data}>
              {rowData}
            </Text>
            <Picker
              selectedValue={this.state.answer}
              onValueChange={(itemValue, itemIndex) => this.setState({answer: itemValue})}
              style={styles.dropdown}
              >
              <Picker.Item label='Yes' value='yes' />
              <Picker.Item label='No' value='no' />
              <Picker.Item label='Unsure' value='unsure' />
            </Picker>
          </View>
        } />
    )}
}

const styles = StyleSheet.create({
  dropdown: {

  },
  data: {

  }
});
