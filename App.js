import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  // Test commit: keep app shell styles centralized here.
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0b0c10' }}>
      <StatusBar barStyle="light-content" backgroundColor="#0b0c10" />
      <HomeScreen />
    </SafeAreaView>
  );
}
