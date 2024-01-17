import * as React from 'react';
import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native';


const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];


const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name.name}</Text>
    <Text style={menuStyles.itemText}>{name.price}</Text>
  </View>
);

export default  MenuItemsSection = ({ navigation }) => { 
  const renderItem = ({ item }) => <Item name={item} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.header}>
      <Text style={menuStyles.sectionHeader}>{title}</Text>
    </View>
  );
  const Separator = () => <View style={menuStyles.separator} />;

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
      />
      <Pressable>
        <Text style={menuStyles.nav} onPress={() => navigation.navigate('Feedback')}>Leave Feedback</Text>
      </Pressable>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHeader: {
    backgroundColor: '#F4CE14',
    color: '#333333',
    fontSize: 30,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
  nav: {
    fontSize: 16,
    fontWeight: 'bold', 
    backgroundColor: '#3e524b',
    color: 'white',
    overflow: 'hidden',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 30,
    flex: .5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    alignSelf: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#F4CE14',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F4CE14',
    textAlign: 'center',
  },
  footer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F4CE14',
    textAlign: 'center',
  },
});