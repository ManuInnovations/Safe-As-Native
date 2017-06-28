import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Button from 'react-native-button';

export default class NavBar extends React.Component {
  // console.log(Dimensions.get('window'))

  render(){
    return(
      <View style={styles.navbar}>
        <Image style={styles.logo} source={require('../static/images/checkbox.png')} />
        <Text style ={styles.navBarHeader} > SAFE-AS </Text>
        <Text style = {styles.navBarButton}> hamburger </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    paddingTop: 30,
    backgroundColor: '#1EAAF1'
  },
  logo:{
    width: 50,
    height: 50,
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign:'center',
     width: 100,
  },
});
