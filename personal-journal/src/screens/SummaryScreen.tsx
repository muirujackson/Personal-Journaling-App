import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen: React.FC = () => {
  // Sample summary data
  const summaryData = {
    daily: 5,
    weekly: 20,
    monthly: 60,
  };

  return (
    <View style={styles.container}>
      <Text>Summary Screen</Text>
      <Text>Daily Entries: {summaryData.daily}</Text>
      <Text>Weekly Entries: {summaryData.weekly}</Text>
      <Text>Monthly Entries: {summaryData.monthly}</Text>
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

export default SummaryScreen;