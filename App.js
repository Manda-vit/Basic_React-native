import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text  style={{
            color: "#fff",
            fontSize: 18,
            marginVertical: 2,
          }}>Amanda Vitória de Albuquerque Melo e Silva</Text>
      
      <StatusBar style="auto" />
      <Image source={require('./android/app/src/assets/meme.jpg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
