import { View, Text } from 'react-native';
import CheckInButton from '../components/CheckInButton';
import 'expo-router/entry';

const Index = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Welcome to Gym Check-In App!</Text>
    <CheckInButton />
  </View>
);

export default Index;
