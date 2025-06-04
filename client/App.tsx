import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [test, setTest] = useState('')

  const apiTest = async () => {
    const res = await fetch('http://127.0.0.1:3000/test')
    const data = await res.json();
    setTest(data.test)
  }

  useEffect(() => {
    apiTest();
  }, [])

  return (
    <View style={styles.container}>
      <Text>Farmmunity</Text>
      <Text>{test}</Text>
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
