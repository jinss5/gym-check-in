import { Button, Alert } from 'react-native';
import { saveCheckIn } from '../utils/storage';

export default function CheckInButton() {
  const handleCheckIn = async () => {
    const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    await saveCheckIn(currentDate);
    Alert.alert('Checked In!');
  };

  return <Button title="Check In" onPress={handleCheckIn} />;
}
