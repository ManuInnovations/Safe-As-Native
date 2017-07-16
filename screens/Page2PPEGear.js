import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
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
    console.log('page 3 state,', this.state);
  }

  goToNextPage = () => {
    console.log('triggered go to next page', this.props.navigation.navigate(''));
    this.props.navigation.navigate('NewReportP3')
  };

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
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
      </ScrollView>
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
