import { CheckIns } from '../types/checkins';
import { formatYearMonthDate } from '../utils/format';

export const getCurrentStreak = (dates: CheckIns): number => {
  const sortedDates = Object.keys(dates).sort();

  if (sortedDates.length === 0) return 0;

  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const todayDate = formatYearMonthDate(today);
  const yesterdayDate = formatYearMonthDate(yesterday);
  const lastDayDate = sortedDates[sortedDates.length - 1];

  if (lastDayDate !== todayDate && lastDayDate !== yesterdayDate) {
    return 0;
  }

  let streak = 1;
  for (let i = sortedDates.length - 2; i >= 0; i--) {
    const prevDate = new Date(sortedDates[i]);
    const nextDate = new Date(sortedDates[i + 1]);

    const diff =
      (nextDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};

export const getLongestStreak = (dates: CheckIns): number => {
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
