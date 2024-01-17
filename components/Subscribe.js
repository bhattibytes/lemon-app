import * as React from 'react';
import { 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
} from 'react-native';
import { useState } from 'react';
import logo from '../assets/LL.png';

export default function SubscribeForm({ navigation }) {
  const [userEmail, onChangeUserEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      { !showThankYou ? 
      <ScrollView keyboardDismissMode="onDrag">
        <Image 
          source={logo} 
          style={styles.logo}
          accessible={true}
          accessibilityLabel='Little Lemon Logo'
        />
        <Text style={styles.headingSection}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          style={styles.input}
          value={userEmail}
          onChangeText={onChangeUserEmail}
          placeholder='Type your email here'
          clearButtonMode='always'
          keyboardType='email-address'
        />
        <Pressable 
          disabled={userEmail.indexOf('@') !== -1 ? false : true} 
          onPress={()=> {
            setShowThankYou(!showThankYou)
            alert('Thank you for subscribing, stay tuned!')
          }}
        >
          <Text style={userEmail.indexOf('@') !== -1 ? styles.subBtn : styles.noEmail}>Subscribe</Text>
        </Pressable>
      </ScrollView>
      : 
      <>
        <Text style={styles.headingSection}>
            Thank you for subscribing to our newsletter to get all the latest and greatest healthy receipes sent directly in your in-box!
        </Text>
        <Pressable onPress={()=> { navigation.navigate('Home') }} style={styles.pressBtn}>
          <Text style={styles.homeBtn}> { showThankYou && 'Go Back Home'}</Text>
        </Pressable>
      </>
      }
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingLeft: 20,
    backgroundColor: 'white',
    lineHeight: 50,
  },
  headingSection: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 80,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white',
    paddingLeft: 10,
    borderRadius: 5,
  },
  homeBtn: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    width: 330,
    backgroundColor: '#3e524b',
    overflow: 'hidden',
    paddingTop: 15,
    paddingBottom: 30,
    marginBottom: 20,
    flex: .5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  subBtn: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    width: 330,
    backgroundColor: '#3e524b',
    overflow: 'hidden',
    paddingTop: 15,
    paddingBottom: 10,
    marginBottom: 20,
    flex: .5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  noEmail: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    width: 330,
    backgroundColor: 'grey',
    overflow: 'hidden',
    paddingTop: 15,
    paddingBottom: 10,
    marginBottom: 20,
    flex: .5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  logo: {
    top: 50,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});