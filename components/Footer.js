import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={footerStyles.viewContainer}>
      <Text style={footerStyles.text}>
        All rights reserved by Little Lemon, © 2022 
      </Text>
    </View>
  );
}


const footerStyles = StyleSheet.create({
  viewContainer: {
    flex: 0.15, 
    backgroundColor: '#EE9972'
  },

  text: {
    padding: 5, 
    fontSize: 18, 
    color: 'black', 
    textAlign: 'center',
    fontStyle: 'italic'
  }
});