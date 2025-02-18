import { View } from 'react-native';
import CalendarView from '../components/CalendarView';

const CalendarScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: 'white',
    }}
  >
    <CalendarView />
  </View>
);

export default CalendarScreen;
