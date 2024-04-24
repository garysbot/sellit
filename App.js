import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  const handlePress = () => {
    console.log('Text pressed')
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} numberOfLines={10} onPress={handlePress}>
        Hello World! It's Gary Jiang. In the flesh.
        Hello World! It's Gary Jiang. In the flesh.
        Hello World! It's Gary Jiang. In the flesh.
        Hello World! It's Gary Jiang. In the flesh.
        Hello World! It's Gary Jiang. In the flesh.
        Hello World! It's Gary Jiang. In the flesh.
      </Text>
      <Text style={styles.text}>Hi there. The mobile view renders so fast.</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff'
  }
});
