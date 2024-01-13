import * as React from 'react';
import { View, Text } from 'react-native';

export default function Footer() {
  return (
    <View style={{ flex: 0.15, backgroundColor: '#F4CE14', position: 'absolute', bottom: 10, right: 0, left: 0 }}>
      <Text style={{ padding: 5, fontSize: 12, color: 'black', textAlign: 'center' }}>
        All rights reserved by Little Lemon, © 2022 
      </Text>
    </View>
  );
}