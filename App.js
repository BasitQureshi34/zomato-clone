import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View>
      <HomeScreen></HomeScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    
  },
});
