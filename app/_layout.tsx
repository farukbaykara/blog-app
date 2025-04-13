import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import store from '@/redux/store';
import CreateScreen from './(tabs)/create';
import App from './index';
import NonTabScreen from './screens/NonTabScreen';
import BlogDetailScreen from './screens/BlogDetailScreen';
import { TouchableOpacity } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import EditScreen from './screens/EditScreen';
import { IconSymbol } from '@/components/ui/IconSymbol.ios';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tabs Navigator */}
        <Stack.Screen
          name="index"
          component={App}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Blog App',
            headerBackTitle: 'Back',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('create')}>
                                <IconSymbol
                  name="plus.circle"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="create"
          component={CreateScreen}
          options={{ headerShown: true, title: 'Create Blog', headerBackTitle: 'Back' }}
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
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Blog Details',
            headerBackTitle: 'Back'
          })}
        />
        <Stack.Screen
          name="EditScreen"
          component={EditScreen}
          options={{ headerShown: true, title: 'Edit Blog', headerBackTitle: 'Back' }}
        />
      </Stack.Navigator>
    </Provider>
  );
}
