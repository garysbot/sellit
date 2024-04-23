import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log(`Hello World`)
  return (
    <View style={styles.container}>
      <Text>Hello World! It's Gary Jiang. In thFe flesh.</Text>
      <Text>Hi there. The mobile view renders so fast.</Text>
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
});
