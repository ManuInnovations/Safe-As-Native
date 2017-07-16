import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from 'react-native-button';

export default class NewReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitDate: '',
      text: '' ,
      siteName: '',
      projectNumber: '',
      siteAddress: '',
      siteContactName: '',
      siteContactPhone: '',
      siteContactEmail: '',
    };

  }

  goToNextPage = (user) => {
    this.props.navigation.navigate('NewReportP2');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text >Site Visit Date:</Text>
        <TextInput
          onChangeText={(visitDate) => this.setState({visitDate})}
          value={this.state.visitDate}
        />
        <Text >Your name:</Text>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text >Site Name: </Text>
        <TextInput
          onChangeText={(siteName) => this.setState({siteName})}
          value={this.state.siteName}
        />
        <Text >Project Number: </Text>
        <TextInput
          onChangeText={(projectNumber) => this.setState({projectNumber})}
          value={this.state.projectNumber}
        />
        <Text >Site Address: </Text>
        <TextInput
          onChangeText={(siteAddress) => this.setState({siteAddress})}
          value={this.state.siteAddress}
        />
        <Text >Site Contact Name: </Text>
        <TextInput
          onChangeText={(siteContactName) => this.setState({siteContactName})}
          value={this.state.siteContactName}
        />
        <Text >Site Contact Phone: </Text>
        <TextInput
          onChangeText={(siteContactPhone) => this.setState({siteContactPhone})}
          value={this.state.siteContactPhone}
        />
        <Text >Site Contact email: </Text>
        <TextInput
          onChangeText={(siteContactEmail) => this.setState({siteContactEmail})}
          value={this.state.siteContactEmail}
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
