import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckIns, createNewCheckInsType } from '../types/checkins';

interface CheckInContextType {
  checkIns: CheckIns;
  saveCheckIn: (date: string) => Promise<void>;
}

const CheckInContext = createContext<CheckInContextType | undefined>(undefined);

export const CheckInProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [checkIns, setCheckIns] = useState<CheckIns>(() => ({}));

  useEffect(() => {
    const loadCheckIns = async () => {
      try {
        const storedCheckIns = await AsyncStorage.getItem('checkIns');
        if (storedCheckIns) {
          setCheckIns(JSON.parse(storedCheckIns));
        }
      } catch (error) {
        console.error('Error fetching check-ins from storage:', error);
        setCheckIns({});
      }
    };

    loadCheckIns();
  }, []);

  const saveCheckIn = async (date: string): Promise<void> => {
    try {
      const newCheckIn = createNewCheckInsType(date);
      const updatedCheckIns = { ...(checkIns || {}), ...newCheckIn };

      setCheckIns(updatedCheckIns);
      await AsyncStorage.setItem('checkIns', JSON.stringify(updatedCheckIns));
    } catch (error) {
      console.error('Error saving check-in:', error);
    }
  };

  return (
    <CheckInContext.Provider value={{ checkIns, saveCheckIn }}>
      {children}
    </CheckInContext.Provider>
  );
};

export const useCheckIn = () => {
  const context = useContext(CheckInContext);
  if (!context) {
    throw new Error('useCheckIn must be used within a CheckInProvider');
  }
  return context;
};
