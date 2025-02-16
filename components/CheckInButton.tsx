import { Button, Alert } from 'react-native';
import { useCheckIn } from '../context/CheckInContext';
import { formatDate } from '../utils/format';

const CheckInButton = () => {
  const { saveCheckIn } = useCheckIn();

  const handleCheckIn = async () => {
    const currentDate = new Date();
    const date = formatDate(currentDate);

    await saveCheckIn(date);
    Alert.alert('Checked In!');
  };

  return <Button title="Check In" onPress={handleCheckIn} />;
};

export default CheckInButton;
