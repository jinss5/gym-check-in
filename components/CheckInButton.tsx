import { Button, Alert } from 'react-native';

export default function CheckInButton() {
  return (
    <Button
      title="Check In"
      onPress={() => Alert.alert('Checked In!')}
    />
  );
}
