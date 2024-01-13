import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const items = [
  { id: 1, name: 'Appetizers' },
  { id: 2, name: 'Entrees' },
  { id: 3, name: 'Desserts' },
  { id: 4, name: 'Soft Drinks' },
  { id: 5, name: 'Beer' },
  { id: 6, name: 'Wine' },
  { id: 7, name: 'Mixed Drinks' },
]

export default function MenuItems() {
  return (
    <View style={menuStyles.viewContainer}>
      <ScrollView style={menuStyles.scrollViewContainer} 
      horizontal={false}
      indicatorStyle='white'
      >
        {items.map((item) => (
            <Text style={menuStyles.text} numberOfLines={1} key={item.id}>
              {item.name}
            </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const menuStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'black',
  },

  scrollViewContainer: {
    flex: 1, 
  },

  text: {
    padding: 20, 
    fontSize: 20, 
    color: '#F4CE14', 
    textAlign: 'center',
    fontWeight: 'bold',
  }
});