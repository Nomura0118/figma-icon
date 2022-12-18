import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from './components/icons/Icon';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.helloIcons}>
      <Icon type="play" size={24} color="#000" style={styles.icon}/>
      <Text>Open up App.tsx to start working on your app!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 4
  }
});
