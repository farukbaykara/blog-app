import { Tabs } from 'expo-router';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import NonTabScreen from '../screens/NonTabScreen'; // Import your non-tab screen
import { Provider } from 'react-redux';
import store, { RootState, AppDispatch } from '@/redux/store';
import BlogDetailScreen from '../screens/BlogDetailScreen';
import App from '..';
import CreateScreen from './create';


const Stack = createStackNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tabs Navigator */}
        <Stack.Screen
          name="create"
          component={CreateScreen}
          options={{ headerShown: true, title: 'Create Blog', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="index"
          component={App}
          options={{ headerShown: true, title: 'Blog App', headerBackTitle: 'Back' }}
        />
        {/* Non-Tab Screen */}
        <Stack.Screen
          name="NonTabScreen"
          component={NonTabScreen}
          options={{ headerShown: true, title: 'NonTabScreen', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="BlogDetailScreen"
          component={BlogDetailScreen}
          options={{ headerShown: true, title: 'Blog Details', headerBackTitle: 'Back' }}
        />
      </Stack.Navigator>
    </Provider>
  );
}
