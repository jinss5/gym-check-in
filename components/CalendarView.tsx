import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import Toast from 'react-native-toast-message';
import { useCheckIn } from '../context/CheckInContext';

interface SelectedDates {
  [date: string]: {
    selected: boolean;
    selectedColor: string;
    selectedTextColor: string;
  };
}

const CalendarView = () => {
  const { checkIns, saveCheckIn, removeCheckIn } = useCheckIn();
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
    const selectedDate = date.dateString;

    if (checkIns[selectedDate]) {
      removeCheckIn(selectedDate);
    } else {
      if (new Date(selectedDate) <= new Date()) {
        saveCheckIn(selectedDate);
      } else {
        Toast.show({
          type: 'error',
          text1: '🚫 Invalid Check-in',
          text2: "You can't check in for a future workout.",
          topOffset: 100,
          visibilityTime: 2000,
        });
      }
    }
  };

  return <Calendar markedDates={markedDates} onDayPress={handleDayPress} />;
};

export default CalendarView;
