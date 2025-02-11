import { View, Text } from 'react-native';
import CalendarView from '../components/CalendarView';

export default function CalendarScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Check-In Calendar</Text>
      <CalendarView />
    </View>
  );
}
