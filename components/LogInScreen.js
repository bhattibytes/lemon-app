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
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="onDrag">
        <Text style={styles.headingSection}>
          Welcome to Little Lemon!
        </Text>
        <Text style={styles.infoSection}>
          Login to continue
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          keyboardType='email-address'
          placeholder='Email'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={onChangePassword}
          placeholder='Password'
          secureTextEntry={true}
          maxLength={20}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },

  headingSection: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },

  infoSection: {
    marginTop: 60,
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
});