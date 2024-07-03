import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface JournalEntryCardProps {
  title: string;
  content: string;
  date: string;
  category: string;
  onPress: () => void;
}

const JournalEntryCard: React.FC<JournalEntryCardProps> = ({ title, content, date, category, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.content} numberOfLines={2}>{content}</Text>
      <Text style={styles.category}>Category: {category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  content: {
    marginVertical: 8,
    fontSize: 16,
  },
  category: {
    fontSize: 14,
    color: 'gray',
  },
});

export default JournalEntryCard;