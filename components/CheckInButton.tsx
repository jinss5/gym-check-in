import { Button, Alert } from 'react-native';
import { saveCheckIn } from '../utils/storage';

const CheckInButton = () => {
  const handleCheckIn = async () => {
    const currentDate = new Date();
    const date = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

    await saveCheckIn(date);
    Alert.alert('Checked In!');
  };

  return <Button title="Check In" onPress={handleCheckIn} />;
};

export default CheckInButton;
