import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import HelloRNV2 from './components/02Hello/02HelloRNV2';
import MySectionList from './components/Questao01';




export default function App() {
  return (
    <View style={styles.container}>
      <MySectionList/>
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
