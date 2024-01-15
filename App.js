import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Welcome from './components/Welcome.js';
import MenuItemsSection from './components/MenuItemsSection.js';
import FeedBackForm from './components/FeedBackForm.js';
import LogInScreen from './components/LogInScreen.js';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showFeedBackForm, setShowFeedBackForm] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <View style={styles.main}>
      <Header />
      { !showMenu && !showFeedBackForm && userLoggedIn && <Welcome />}
      { !showFeedBackForm && userLoggedIn &&
        <Pressable onPress={()=> setShowMenu(!showMenu)} style={styles.pressBtn}>
          <Text style={styles.viewMenuBtn}> { showMenu ? 'Home' : 'View Menu Items'}</Text>
        </Pressable>
      }
      { !showMenu && userLoggedIn &&
        <Pressable onPress={()=> setShowFeedBackForm(!showFeedBackForm)} style={styles.pressBtn}>
          <Text style={styles.viewMenuBtn}> { showFeedBackForm ? 'Home' : 'Leave Feedback'}</Text>
        </Pressable>
      }
      { showMenu && userLoggedIn && <MenuItemsSection /> }
      { showFeedBackForm && userLoggedIn && <FeedBackForm /> }
      { userLoggedIn && 
        <Pressable onPress={()=> {
          setShowLogIn(false), 
          setUserLoggedIn(false),
          setShowMenu(false),
          setShowFeedBackForm(false)
          }} style={styles.pressBtn}>
          <Text style={styles.viewMenuBtn}> { userLoggedIn && 'Log Out'}</Text>
        </Pressable>
      }
      { !userLoggedIn &&
        <LogInScreen 
          showLogIn={showLogIn} 
          setShowLogIn={setShowLogIn} 
          userLoggedIn={userLoggedIn} 
          setUserLoggedIn={setUserLoggedIn}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          userPassword={userPassword}
          setUserPassword={setUserPassword}
        />
      }
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  viewMenuBtn: {
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
  pressBtn: {
    alignItems: 'center',
  },
});