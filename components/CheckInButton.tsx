import { Button, Alert } from 'react-native';
import { saveCheckIn } from '../utils/storage';
import { formatDate } from '../utils/format';

const CheckInButton = () => {
  const handleCheckIn = async () => {
    const currentDate = new Date();
    const date = formatDate(currentDate);

    await saveCheckIn(date);
    Alert.alert('Checked In!');
  };

  return <Button title="Check In" onPress={handleCheckIn} />;
};

export default CheckInButton;
