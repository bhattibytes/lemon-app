import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <View style={headerStyles.viewContainer}>
      <Image 
      source={logo} 
      style={headerStyles.logo}
      accessible={true}
      accessibilityLabel='Little Lemon Logo'
    />
    </View>
  );
}

const headerStyles = StyleSheet.create({
  viewContainer: {
    flex: 0.35, 
    backgroundColor: '#F4CE14'
  },

  logo: {
    top: 0,
    width: 200,
    height: 120,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});