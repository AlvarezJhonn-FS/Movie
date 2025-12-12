import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputCard from './InputCard';
export default function App() {
  return (
   
    <View style={styles.container}>
      <StatusBar style="auto" />

<InputCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112B45',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
