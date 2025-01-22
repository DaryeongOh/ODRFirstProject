// app/tabs/StatisticsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatisticsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Statistics Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default StatisticsScreen;
