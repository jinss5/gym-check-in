import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { CheckIns } from '../types/checkins';
import { getCheckIns } from '../utils/storage';

const getLongestStreak = (dates: CheckIns) => {
  const datesArray = Object.keys(dates);

  if (datesArray.length <= 1) {
    return datesArray.length;
  }

  let sorted = datesArray.sort();
  let maxStreak = 0;
  let streak = 1;

  for (let i = 1; i < sorted.length; i++) {
    const prevDate = new Date(sorted[i - 1]);
    const currDate = new Date(sorted[i]);

    const diff =
      (currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak += 1;
      maxStreak = Math.max(maxStreak, streak);
    } else {
      streak = 1;
    }

    maxStreak = Math.max(maxStreak, streak);
  }

  return maxStreak;
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
