import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useCheckIn } from '../context/CheckInContext';
import { getCurrentStreak, getLongestStreak } from '../utils/streaks';
import { formatYearMonth } from '../utils/format';

const StatCard = ({
  title,
  value,
  emoji,
}: {
  title: string;
  value: string | number;
  emoji?: string;
}) => (
  <View style={styles.card}>
    <Text style={styles.emoji}>{emoji}</Text>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export const CheckInsCountTotal = () => {
  const { checkIns } = useCheckIn();
  const totalCheckIns = Object.keys(checkIns).length;

  return (
    <StatCard title="Total Gym Check-ins" value={totalCheckIns} emoji="🏆" />
  );
};

export const CheckInsCountByMonth = () => {
  const { checkIns } = useCheckIn();
  const currentMonth = formatYearMonth(new Date());

  const checkInsThisMonth = Object.keys(checkIns).filter((date) =>
    date.startsWith(currentMonth),
  ).length;

  return (
    <StatCard
      title="This Month's Check-ins"
      value={checkInsThisMonth}
      emoji="📅"
    />
  );
};

export const CurrentStreak = () => {
  const { checkIns } = useCheckIn();
  const [currentStreak, setCurrentStreak] = useState(0);

  useEffect(() => {
    const streaks = getCurrentStreak(checkIns);
    setCurrentStreak(streaks);
  }, [checkIns]);

  return <StatCard title="Current Streak" value={currentStreak} emoji="🔥" />;
};

export const LongestStreak = () => {
  const { checkIns } = useCheckIn();
  const [longestStreak, setLongestStreak] = useState(0);

  useEffect(() => {
    const streaks = getLongestStreak(checkIns);
    setLongestStreak(streaks);
  }, [checkIns]);

  return <StatCard title="Longest Streak" value={longestStreak} emoji="🏅" />;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Android shadow
    width: '90%',
  },
  emoji: {
    fontSize: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 4,
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
    color: '#007AFF',
    marginTop: 4,
  },
});
