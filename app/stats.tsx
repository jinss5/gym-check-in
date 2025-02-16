import { View, Text } from 'react-native';
import {
  TotalCheckIns,
  CurrentStreak,
  LongestStreak,
} from '../components/CheckInStats';

const StatsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Check-In Stats</Text>
    <TotalCheckIns />
    <CurrentStreak />
    <LongestStreak />
  </View>
);

export default StatsScreen;
