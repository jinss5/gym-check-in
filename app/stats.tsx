import { View, Text, StyleSheet } from 'react-native';
import {
  CheckInsCountTotal,
  CheckInsCountByMonth,
  CurrentStreak,
  LongestStreak,
} from '../components/CheckInStats';

const StatsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Check-In Stats</Text>
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
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
});

export default StatsScreen;
