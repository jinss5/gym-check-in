import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { useCheckIn } from '../context/CheckInContext';

interface SelectedDates {
  [date: string]: {
    selected: boolean;
    selectedColor: string;
    selectedTextColor: string;
  };
}

const CalendarView = () => {
  const { checkIns, saveCheckIn } = useCheckIn();
  const [markedDates, setMarkedDates] = useState<SelectedDates>({});

  useEffect(() => {
    const marks: SelectedDates = {};

    Object.keys(checkIns).forEach((date: string) => {
      marks[date] = {
        selected: true,
        selectedColor: 'green',
        selectedTextColor: 'white',
      };
    });

    setMarkedDates(marks);
  }, [checkIns]);

  const handleDayPress = (date: { dateString: string }) => {
    saveCheckIn(date.dateString);
  };

  return <Calendar markedDates={markedDates} onDayPress={handleDayPress} />;
};

export default CalendarView;
