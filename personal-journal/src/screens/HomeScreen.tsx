import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen: React.FC = ({ navigation }) => {
  const entries = [
    // Sample entries
  ];

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {entries.map((entry) => (
        <View key={entry.id}>
          <Text>{entry.title}</Text>
          <Button
            title="View"
            onPress={() => navigation.navigate('EntryDetail', { entry })}
          />
        </View>
      ))}
      <Button title="Add Entry" onPress={() => navigation.navigate('AddEntry')} />
      <Button title="Summary" onPress={() => navigation.navigate('Summary')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default HomeScreen;