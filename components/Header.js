import * as React from 'react';
import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={{ flex: 0.15, backgroundColor: '#F4CE14' }}>
      <Text style={{ padding: 20, fontSize: 28, color: 'black', textAlign: 'center' }} numberOfLines={3}>
        Little Lemon Restaurant{`\n`}
      </Text>
    </View>
  );
}