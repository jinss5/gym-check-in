import { View, Text } from 'react-native';
import CheckInButton from '../components/CheckInButton';
import 'expo-router/entry';

const Index = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <CheckInButton />
  </View>
);

export default Index;
