import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditEntryScreen: React.FC = ({ route }) => {
  const { entry } = route.params;
  const [title, setTitle] = useState(entry.title);
  const [content, setContent] = useState(entry.content);
  const [category, setCategory] = useState(entry.category);
  const [date, setDate] = useState(entry.date);

  const handleSaveEntry = () => {
    // Logic to save the edited entry
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

export default EditEntryScreen;