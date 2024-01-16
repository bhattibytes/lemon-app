import * as React from 'react';
import { 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  ImageBackground, 
  useColorScheme, 
  useWindowDimensions,
  Pressable,
} from 'react-native';
import mac from '../assets/mac.png';
import fruit from '../assets/fruit.jpeg';
import chick from '../assets/chick.png';
import cakes from '../assets/cakes.jpeg';
import lemon from '../assets/lemon.png';


export default function Welcome({ navigation }) {
  const colorScheme = useColorScheme();
  const {width, height, fontScale} = useWindowDimensions();

  return (
    <ScrollView 
      indicatorStyle='white'
      style={[
        welcomeStyles.container, 
        colorScheme === 'light' ? {backgroundColor: 'white'} 
        : {backgroundColor: '#333333'}
    ]}>
        <Text style={welcomeStyles.title}>Window Dimensions</Text>
        <Text style={welcomeStyles.text2}>Height: {height}</Text>
        <Text style={welcomeStyles.text2}>Width: {width}</Text>
        <Text style={welcomeStyles.text2}>Font Scale: {fontScale}</Text>

        <Text style={welcomeStyles.title}>Welcome to Little {'\n'} Lemon</Text>
        <Text>{'\n'}</Text>
      <ImageBackground source={lemon} style={welcomeStyles.background}>
        <Text style={welcomeStyles.text}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
      </ImageBackground>
      <Image 
        source={fruit} 
        style={welcomeStyles.images}
        accessible={true}
        accessibilityLabel='Assorted Fruits'
      />
     <Image 
        source={cakes} 
        style={welcomeStyles.images}
        accessible={true}
        accessibilityLabel='Pancakes'
        resizeMode= 'cover'
      />
     <Image 
      source={chick} 
      style={welcomeStyles.images}
      accessible={true}
      accessibilityLabel='Healthy Chicken'
    />
     <Image 
      source={mac} 
      style={welcomeStyles.images}
      accessible={true}
      accessibilityLabel='Pasta with Cheese'
    />
    <Pressable>
      <Text style={welcomeStyles.nav} onPress={() => navigation.navigate('Menu')}>Go To - Menu Items</Text>
    </Pressable>
    </ScrollView>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 0, 
    paddingLeft: 20, 
    backgroundColor: '#333333',
    lineHeight: 50,
  },

  title: {
    marginTop: 20,
    fontSize: 30, 
    fontWeight: 'bold', 
    color: 'black',
    textAlign: 'center'
  },

  text: {
    padding: 15, 
    fontSize: 25, 
    color: 'black',
    textAlign: 'center',
    paddingBottom: 50,
    fontWeight: 'bold',
  },

  text2: {
    textAlign: 'center',
    fontSize: 20, 
    color: 'black',
    fontWeight: 'bold',
  },

  nav: {
    fontSize: 30,
    backgroundColor: '#FFD700',
    overflow: 'hidden',
    padding: 10,
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    alignSelf: 'center',
  },
  
  background: {
    width: 350,
    height: 400,
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  images: {
    marginTop: 20,
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderRadius: 20,
    resizeMode: 'contain',
  },

});