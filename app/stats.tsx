import { View, Text } from 'react-native';
import { CheckInStats, LongestStreak } from '../components/CheckInStats';

export default function StatsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Check-In Stats</Text>
      <CheckInStats />
      <LongestStreak />
    </View>
  );
}
