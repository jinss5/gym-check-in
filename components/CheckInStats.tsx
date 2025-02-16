import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useCheckIn } from '../context/CheckInContext';
import { getCurrentStreak, getLongestStreak } from '../utils/streaks';

export const TotalCheckIns = () => {
  const { checkIns } = useCheckIn();
  const totalCheckIns = Object.keys(checkIns).length;

  return (
    <Text>
      {totalCheckIns > 0
        ? `Great job! You've been to the gym ${totalCheckIns} times.`
        : "You haven't checked in yet. Time to hit the gym!"}
    </Text>
  );
};

export const CurrentStreak = () => {
  const { checkIns } = useCheckIn();
  const [currentStreak, setCurrentStreak] = useState(0);

  useEffect(() => {
    const streaks = getCurrentStreak(checkIns);
    setCurrentStreak(streaks);
  }, [checkIns]);

  return (
    <View>
      <Text>Current Streak: {currentStreak}</Text>
    </View>
  );
};

export const LongestStreak = () => {
  const { checkIns } = useCheckIn();
  const [longestStreak, setLongestStreak] = useState(0);

  useEffect(() => {
    const streaks = getLongestStreak(checkIns);
    setLongestStreak(streaks);
  }, [checkIns]);

  return (
    <View>
      <Text>Longest Streak: {longestStreak}</Text>
    </View>
  );
};
