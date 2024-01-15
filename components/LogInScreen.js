import * as React from 'react';
import { 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import { useState } from 'react';

export default function FeedBackForm({ 
  showLogIn, 
  setShowLogIn, 
  userLoggedIn, 
  setUserLoggedIn, 
  userEmail, 
  setUserEmail, 
  userPassword, 
  setUserPassword 
}) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const toggleLogIn = () => {
    setShowLogIn(!showLogIn);
    setUserLoggedIn(!userLoggedIn);
  }

  const saveUserInfo = () => {
    let passwordCapital = false;
    let passwordNumber = false;
    let passwordSpecial = false;
    let emailContainsAt = false;
    if (email !== '') {
      for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
          setEmailIsValid(true);
          emailContainsAt = true;
        }
      }
    } 
    if (email.length && !emailContainsAt) {
      alert('Please enter a valid email address');
      return
    }
    if (password !== '') {
      for (let i = 0; i < password.length; i++) {
        if (password[i] === '!' || password[i] === '@' || password[i] === '#' || password[i] === '$' || password[i] === '%' || password[i] === '^' || password[i] === '&' || password[i] === '*' || password[i] === '(' || password[i] === ')' || password[i] === '-' || password[i] === '_' || password[i] === '+' || password[i] === '=' ) {
          passwordSpecial = true;
        }
        if (password[i] === password[i].toUpperCase()) {
          passwordCapital = true;
        }
        if (password[i] === '1' || password[i] === '2' || password[i] === '3' || password[i] === '4' || password[i] === '5' || password[i] === '6' || password[i] === '7' || password[i] === '8' || password[i] === '9' || password[i] === '0') {
          passwordNumber = true;
        }
      }
      if (passwordCapital && passwordNumber && passwordSpecial) {
        setPasswordIsValid(true);
      } else {
        alert('Password must contain at least one capital letter, one number, and one special character');
        return
      }
    }
    if (emailIsValid && passwordIsValid) {
      setUserPassword(password);
      setUserEmail(email);
      setShowLogIn(!showLogIn);
      setUserLoggedIn(!userLoggedIn);
      setUserLoggedIn(true);
      return
    }

  }
  const clearUserInfo = () => {
    setUserEmail('');
    setUserPassword('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {!showLogIn && !userLoggedIn ?
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
        <Pressable onPress={()=> { 
          if (email === '' || password === '') {
            alert('Please enter a valid email and password');
            return
          } else {
           saveUserInfo()} }} style={styles.pressBtn}>
          <Text style={styles.loginBtn}> { !showLogIn && 'Log in'}</Text>
        </Pressable>
        
      </ScrollView>
      : 
        <>
          <Text style={styles.headingSection}>
              Welcome to Little Lemon!
          </Text>
          <Text style={styles.infoSection}>
              You are now logged in!
          </Text>
          <Pressable onPress={()=> { setShowLogIn(!showLogIn), clearUserInfo() }} style={styles.pressBtn}>
            <Text style={styles.loginBtn}> { showLogIn && 'Log out'}</Text>
          </Pressable>
          <Pressable onPress={toggleLogIn} style={styles.pressBtn}>
            <Text style={styles.loginBtn}> { showLogIn && 'Home'}</Text>
          </Pressable>
        </>
      }
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },

  pressBtn: {
    alignItems: 'center',
  },

  loginBtn: {
    marginTop: 20,
    fontSize: 20,
    padding: 10,
    width: '70%',
    fontWeight: 'bold',
    color: '#F4CE14',
    backgroundColor: '#333333',
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#F4CE14',
    borderRadius: 5,
    marginBottom: 10,
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