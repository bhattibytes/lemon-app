import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={headerStyles.viewContainer}>
      <Text style={headerStyles.text} numberOfLines={3}>
        Little Lemon Restaurant{`\n`}
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  viewContainer: {
    flex: 0.2, 
    backgroundColor: '#EE9972'
  },

  text: {
    padding: 20, 
    fontSize: 28, 
    color: 'black', 
    textAlign: 'center'
  }
});