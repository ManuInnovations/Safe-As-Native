import React from 'react';
import { StyleSheet, Text, View, Dimensions, ListView } from 'react-native';

export default class Home extends React.Component {
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['I know the site contact details', 'I need a site escort', 'I know where emergency exits are', 'I have had the right safety training', 'I have the correct PPE', 'I have the correct tools for the job', 'I need to let someone know where I am']),
    };
  }
  render(){
    return(
       <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
        <Text>
          {rowData}
          <Text style={styles.dropdown}>
            Dropdown
          </Text>
        </Text>
        }
        />
    )}
  }

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: 'red',
    fontSize: 10,
    justifyContent: 'space-between',
    padding: 10,
  }
});
