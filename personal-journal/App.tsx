import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './src/navigation/AppNavigation';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <AppNavigation />
    </SafeAreaProvider>
  );
};

export default App;