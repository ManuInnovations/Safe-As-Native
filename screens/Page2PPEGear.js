import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';
import SelectMultiple from 'react-native-select-multiple';

const ppe = [
  'Safety boots',
  'High visibility vest',
  'Ear protection',
  'Gloves',
  'Eye protection',
  'Face mask / respirator',
  'Hard hat'
]

export default class page2Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPPE:[] };
  }

  onSelectionsChange = (selectedPPE) =>{
    this.setState({ selectedPPE })
  }

  goToNextPage = (user) => {
    this.props.navigation.navigate('NewReportP3');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Personal Protective Clothing & Equipment (PPE)
        </Text>
        <Text>
          Select gear you currently have:
        </Text>
        <SelectMultiple
          items = {ppe}
          selectedItems = {this.state.selectedPPE}
          onSelectionsChange = {this.onSelectionsChange}
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
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
})
