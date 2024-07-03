import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EntryDetailScreen: React.FC = ({ route }) => {
  const { entry } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.content}>{entry.content}</Text>
      <Text style={styles.category}>Category: {entry.category}</Text>
      <Text style={styles.date}>Date: {entry.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginVertical: 12,
  },
  category: {
    fontSize: 14,
    color: 'gray',
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
});

export default EntryDetailScreen;