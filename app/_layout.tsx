import { Tabs } from 'expo-router';
import { CheckInProvider } from '../context/CheckInContext';
import Toast from 'react-native-toast-message';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
  return (
    <CheckInProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: 'Calendar',
            tabBarIcon: ({ color }) => (
              <Ionicons name="calendar" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="stats"
          options={{
            title: 'Stats',
            tabBarIcon: ({ color }) => (
              <Ionicons name="stats-chart" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
      <Toast />
    </CheckInProvider>
  );
}
