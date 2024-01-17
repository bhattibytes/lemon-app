import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/Welcome.js';
import MenuScreen from './components/MenuItemsSection.js';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Welcome">
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Menu" component={MenuScreen} />
          </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});