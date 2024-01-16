import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/Welcome.js';
import LoginScreen from './components/LogInScreen.js';
import FeedBackForm from './components/FeedBackForm.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './components/MenuItemsSection.js';

const Stack = createNativeStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center'}}
      source={require('./assets/lemon.png')}
    />
  );
};

export default function App() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{ 
              headerStyle: { backgroundColor: 'black' },
              headerTintColor: 'white',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          >
            <Stack.Screen 
              name="Home" 
              component={WelcomeScreen} 
              options={{
                title: 'Home',
                headerTitle: props => <LogoTitle {...props} />,
              }}
            />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Login">
              {props => <LoginScreen {...props} 
                showLogIn={showLogIn} 
                setShowLogIn={setShowLogIn} 
                userLoggedIn={userLoggedIn} 
                setUserLoggedIn={setUserLoggedIn}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                userPassword={userPassword}
                setUserPassword={setUserPassword}
              />}
            </Stack.Screen>
            <Stack.Screen name="Feedback" component={FeedBackForm} />
          </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

