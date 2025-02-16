import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useCheckIn } from '../context/CheckInContext';
import { getCurrentStreak, getLongestStreak } from '../utils/streaks';
import { formatYearMonth } from '../utils/format';

export const CheckInsCountTotal = () => {
  const { checkIns } = useCheckIn();
  const totalCheckIns = Object.keys(checkIns).length;

  return (
    <View>
      <Text>{`🏆 Total Gym Check-ins: ${totalCheckIns}`}</Text>
    </View>
  );
};

export const CheckInsCountByMonth = () => {
  const { checkIns } = useCheckIn();
  const currentMonth = formatYearMonth(new Date());

  const checkInsThisMonth = Object.keys(checkIns).filter((date) =>
    date.startsWith(currentMonth),
  ).length;

  return (
    <View>
      <Text>
        {checkInsThisMonth > 0
          ? `Great job! You've been to the gym ${checkInsThisMonth} times this month.`
          : "You haven't checked in this month. Time to hit the gym!"}
      </Text>
    </View>
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
