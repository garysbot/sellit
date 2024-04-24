import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Text pressed')
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={handlePress}>Hello World! It's Gary Jiang. In the flesh.</Text>
      <Text style={styles.text}>Hi there. The mobile view renders so fast.</Text>
      <Image 
        source={{ 
          uri: "https://picsum.photos/200/300", 
          width: 200,
          height: 300
        }} />
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
