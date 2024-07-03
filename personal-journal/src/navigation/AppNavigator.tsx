import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddEntryScreen from '../screens/AddEntryScreen';
import EditEntryScreen from '../screens/EditEntryScreen';
import EntryDetailScreen from '../screens/EntryDetailScreen';
import SummaryScreen from '../screens/SummaryScreen';

const AppStack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="AddEntry" component={AddEntryScreen} />
      <AppStack.Screen name="EditEntry" component={EditEntryScreen} />
      <AppStack.Screen name="EntryDetail" component={EntryDetailScreen} />
      <AppStack.Screen name="Summary" component={SummaryScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
