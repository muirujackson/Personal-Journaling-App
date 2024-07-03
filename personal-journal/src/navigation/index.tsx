import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { AuthProvider } from '../context/AuthContext';

const RootStack = createStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="Auth" component={AuthNavigator} />
          <RootStack.Screen name="App" component={AppNavigator} />
        </RootStack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;