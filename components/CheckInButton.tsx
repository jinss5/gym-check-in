import { Pressable, Text, Alert, StyleSheet } from 'react-native';
import { useCheckIn } from '../context/CheckInContext';
import { formatYearMonthDate } from '../utils/format';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF', // A modern blue shade
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24, // Rounded edges
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Adds subtle shadow on Android
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

const CheckInButton = () => {
  const { saveCheckIn } = useCheckIn();

  const handleCheckIn = async () => {
    const currentDate = new Date();
    const date = formatYearMonthDate(currentDate);

    await saveCheckIn(date);
    Alert.alert('Checked In!');
  };

  return (
    <Pressable style={styles.button} onPress={handleCheckIn}>
      <Text style={styles.buttonText}>Check In</Text>
    </Pressable>
  );
};

export default CheckInButton;
