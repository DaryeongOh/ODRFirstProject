import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List Screen</Text>
      {/* Add your todo list content here */}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TodoListScreen;
