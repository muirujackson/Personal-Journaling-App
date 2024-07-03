import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Logic to reset the password
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Button title="Reset Password" onPress={handleResetPassword} />
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

export default ForgotPasswordScreen;