import { View, Text } from 'react-native';
import {
  CheckInsCountTotal,
  CheckInsCountByMonth,
  CurrentStreak,
  LongestStreak,
} from '../components/CheckInStats';

const StatsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Check-In Stats</Text>
    <CheckInsCountTotal />
    <CheckInsCountByMonth />
    <CurrentStreak />
    <LongestStreak />
  </View>
);

export default StatsScreen;
