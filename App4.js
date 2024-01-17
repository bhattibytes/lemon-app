import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/Welcome.js';
import MenuScreen from './components/MenuItemsSection.js';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
            <Tab.Navigator 
              initialRouteName="Welcome"
              screenOptions={({ route }) => ({
              TabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Welcome') {
                  iconName = 'ios-home';
                } else if (route.name === 'Menu') {
                  iconName = 'ios-grid';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              }, 
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}>
              <Tab.Screen name="Welcome" component={WelcomeScreen} />
              <Tab.Screen name="Menu" component={MenuScreen} />
            </Tab.Navigator>
          <Footer />
        </View>
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
