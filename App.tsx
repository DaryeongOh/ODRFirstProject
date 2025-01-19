import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/(tabs)/index'; // SplashScreen in the tabs directory
import TodoListScreen from './app/(tabs)/TodoListScreen'; // TodoList screen in the tabs directory
import StatisticsScreen from './app/(tabs)/StatisticsScreen'; // Statistics screen in the tabs directory

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
