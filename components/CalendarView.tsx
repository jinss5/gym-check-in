import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { getCheckIns } from '../utils/storage';

interface MarkedDates {
  [date: string]: {
    marked: boolean;
    dotColor: string;
  };
}

export default function CalendarView() {
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  useEffect(() => {
    const loadCheckIns = async () => {
      const checkIns: string[] = await getCheckIns();
      const marks: MarkedDates = {};
      checkIns.forEach((date: string) => {
        marks[date] = { marked: true, dotColor: 'green' };
      });
      setMarkedDates(marks);
    };

    loadCheckIns();
  }, []);

  return (
      <Calendar
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: 'green',
          //todayTextColor: 'red',
          dotColor: 'green',
        }}
      />
  );
}
