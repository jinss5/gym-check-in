import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { getCheckIns } from '../utils/storage';
import { CheckIns } from '../types/checkins';

interface SelectedDates {
  [date: string]: {
    selected: boolean;
    selectedColor: string;
    selectedTextColor: string;
  };
}

export default function CalendarView() {
  const [markedDates, setMarkedDates] = useState<SelectedDates>({});

  useEffect(() => {
    const loadCheckIns = async () => {
      const checkIns: CheckIns = await getCheckIns();
      const marks: SelectedDates = {};

      Object.keys(checkIns).forEach((date: string) => {
        marks[date] = {
          selected: true,
          selectedColor: 'green',
          selectedTextColor: 'white',
        };
      });
      setMarkedDates(marks);
    };

    loadCheckIns();
  }, []);

  return <Calendar markedDates={markedDates} />;
}
