import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCheckIn = async (date: string) => {
  try {
    const existingData = await AsyncStorage.getItem('checkIns');
    const checkIns = existingData ? JSON.parse(existingData) : [];
    checkIns.push(date);
    await AsyncStorage.setItem('checkIns', JSON.stringify(checkIns));
  } catch (error) {
    console.error('Error saving check-in:', error);
  }
};

export const getCheckIns = async () => {
  try {
    const data = await AsyncStorage.getItem('checkIns');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error fetching check-ins:', error);
    return [];
  }
};

// Removes all check in data
export const clearCheckIns = async () => {
  try {
    await AsyncStorage.removeItem('checkIns');
    console.log('Data removed successfully!');
  } catch (error) {
    console.error('Error removing data:', error);
  }
};
