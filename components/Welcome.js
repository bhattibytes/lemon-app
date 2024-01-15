import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Welcome() {
  return (
    <ScrollView style={welcomeStyles.container} indicatorStyle='white'>
      <Text style={welcomeStyles.title}>Welcome to Little {'\n'} Lemon</Text>
      <Text>{'\n'}</Text>
      <Text style={welcomeStyles.text}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
    </ScrollView>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 0, 
    paddingLeft: 20, 
    backgroundColor: '#333333',
    lineHeight: 50,
  },

  title: {
    marginTop: 20,
    fontSize: 30, 
    fontWeight: 'bold', 
    color: 'white',
    textAlign: 'center'
  },

  text: {
    padding: 15, 
    fontSize: 25, 
    color: 'white',
    textAlign: 'center'
  },

});