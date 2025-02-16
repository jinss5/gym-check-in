import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useCheckIn } from '../context/CheckInContext';
import { getCurrentStreak, getLongestStreak } from '../utils/streaks';

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

export const CheckInStats = () => (
  <View>
    <Text>Statistics Component</Text>
  </View>
);
