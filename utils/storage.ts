import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckIns } from '../types/checkins';

export const getCheckIns = async (): Promise<CheckIns> => {
  try {
    const data = await AsyncStorage.getItem('checkIns');
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error fetching check-ins from storage:', error);
    return {};
  }
};

export const clearCheckIns = async () => {
  try {
    await AsyncStorage.removeItem('checkIns');
    console.log('Data removed successfully!');
  } catch (error) {
    console.error('Error removing data:', error);
  }
};

export const removeCheckIn = async (date: string) => {
  try {
    const checkIns = await getCheckIns();

    if (checkIns[date]) {
      delete checkIns[date];
      await AsyncStorage.setItem('checkIns', JSON.stringify(checkIns));
    }
  } catch (error) {
    console.error('Error removing data:', error);
  }
};
