import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddEntryScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSaveEntry = () => {
    // Logic to save the entry
  };

  return (
    <View style={styles.container}>
      <Text>Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text>Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Text>Category:</Text>
      <TextInput style={styles.input} value={category} onChangeText={setCategory} />
      <Text>Date:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
      />
      <Button title="Save" onPress={handleSaveEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default AddEntryScreen;