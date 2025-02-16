import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { getCheckIns } from '../utils/storage';
import { getCurrentStreak, getLongestStreak } from '../utils/streaks';

export const CurrentStreak = () => {
  const [currentStreak, setCurrentStreak] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dates = await getCheckIns();

        if (!dates) {
          setCurrentStreak(0);
          return;
        }

        const streak = getCurrentStreak(dates);
        setCurrentStreak(streak);
      } catch (error) {
        console.error('Error fetching check-ins from CurrentStreak:', error);
        setCurrentStreak(0);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Current Streak: {currentStreak}</Text>
    </View>
  );
};

export const LongestStreak = () => {
  const [longestStreak, setLongestStreak] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dates = await getCheckIns();

        if (!dates) {
          setLongestStreak(0);
          return;
        }

        const streak = getLongestStreak(dates);
        setLongestStreak(streak);
      } catch (error) {
        console.error('Error fetching check-ins from LongestStreak:', error);
        setLongestStreak(0);
      }
    };

    fetchData();
  }, []);

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
