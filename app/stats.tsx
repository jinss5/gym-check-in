import { View, Text, StyleSheet } from 'react-native';
import {
  CheckInsCountTotal,
  CheckInsCountByMonth,
  CurrentStreak,
  LongestStreak,
} from '../components/CheckInStats';

const StatsScreen = () => (
  <View style={styles.container}>
    <CheckInsCountTotal />
    <CheckInsCountByMonth />
    <CurrentStreak />
    <LongestStreak />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA', // Light background for a clean look
    paddingTop: 20,
  },
});

export default StatsScreen;
