import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

interface TodoItem {
  id: string;
  category: string;
  items: string[];
}

const todoData: TodoItem[] = [
  {
    id: '1',
    category: '영어',
    items: ['단어 Day 14 외우기', 'Grammar Master 37쪽~46쪽 풀기'],
  },
  {
    id: '2',
    category: '컴퓨터',
    items: ['파이썬 독학 Unit 06 딕셔너리 예제'],
  },
  {
    id: '3',
    category: '중국어',
    items: ['청해 문제집 59쪽~70쪽 풀기', '독해 문제집 31쪽~45쪽 풀기'],
  },
  {
    id: '4',
    category: '프랑스어',
    items: ['프랑스어 회화 패턴 Chapter 7 Unit 4 복습'],
  },
  {
    id: '5',
    category: '한국사',
    items: [],
  },
];

const StopwatchScreen: React.FC = () => {
  const [mainTimer, setMainTimer] = useState(0);  // This counts total seconds
  const [categoryTimers, setCategoryTimers] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setMainTimer((prev) => prev + 1); // Increment total seconds
        if (activeCategory) {
          setCategoryTimers((prev) => ({
            ...prev,
            [activeCategory]: (prev[activeCategory] || 0) + 1,
          }));
        }
      }, 1000);
      setIntervalId(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, activeCategory]);

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const selectCategory = (category: string) => {
    if (!isRunning) {
      setActiveCategory(category);
      setIsRunning(true);  // Start the timer when a category is selected
    }
  };

  const renderTodoItem = ({ item }: { item: TodoItem }) => (
    <View style={styles.todoSection}>
      <Text style={styles.categoryText}>{item.category}</Text>
      {item.items.map((todo, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => selectCategory(item.category)}
          style={[styles.todoItem, activeCategory === item.category && styles.activeItem]}
        >
          <Text style={styles.todoText}>{todo}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  // Format the total seconds into HH:MM:SS format
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      {/* Mini Stopwatch for Category */}
      <Text style={styles.miniTimer}>
        {activeCategory ? `${activeCategory}: ${categoryTimers[activeCategory] || 0}s` : 'Select a category'}
      </Text>

      {/* Main Stopwatch */}
      <Text style={styles.mainTimer}>{formatTime(mainTimer)}</Text>

      {/* Play/Pause Button */}
      <TouchableOpacity onPress={handlePlayPause} style={styles.playPauseButton}>
        <Text style={styles.playPauseButtonText}>
          {isRunning ? '||' : '▶'} {/* '▶' is the play button, '||' is the pause button */}
        </Text>
      </TouchableOpacity>

      {/* Todo List */}
      <FlatList
        data={todoData}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.todoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  miniTimer: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  mainTimer: {
    fontSize: 48,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  playPauseButton: {
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#ff5555',
    borderRadius: 50,
    marginBottom: 20,
  },
  playPauseButtonText: {
    color: '#fff',
    fontSize: 32,
  },
  todoList: {
    marginTop: 10,
  },
  todoSection: {
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  todoItem: {
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 5,
  },
  activeItem: {
    backgroundColor: '#555',
  },
  todoText: {
    color: '#fff',
  },
});

export default StopwatchScreen;
