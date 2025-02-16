import { Tabs } from 'expo-router';
import { CheckInProvider } from '../context/CheckInContext';

export default function Layout() {
  return (
    <CheckInProvider>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="calendar" options={{ title: 'Calendar' }} />
        <Tabs.Screen name="stats" options={{ title: 'Stats' }} />
      </Tabs>
    </CheckInProvider>
  );
}
