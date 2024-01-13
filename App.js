import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Welcome from './components/Welcome.js';
import MenuItems from './components/MenuItems.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Welcome />
      <MenuItems />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
