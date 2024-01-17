import * as React from 'react';
import { 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState } from 'react';

export default function FeedBackForm() {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [phoneNumber, onChangePhoneNumber] = useState('');
  const [message, onChangeMessage] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="onDrag">
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder='First Name'
          clearButtonMode='always'
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder='Last Name'
          clearButtonMode='always'
        />
          <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
          placeholder='Phone Number'
          keyboardType='numeric'
          clearButtonMode='always'
        />
        <TextInput
          style={styles.messageInput}
          value={message}
          onChangeText={onChangeMessage}
          placeholder='Write your message here...'
          maxLength={250}
          clearButtonMode='always'
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingLeft: 20,
    backgroundColor: '#333333',
    lineHeight: 50,
  },

  headingSection: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },

  infoSection: {
    padding: 15,
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: 'black',
    backgroundColor: '#EDEFEE',
    fontWeight: 'bold',
  },

  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#EDEFEE',
  },
});