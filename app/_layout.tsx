import { Tabs } from 'expo-router';
import { CheckInProvider } from '../context/CheckInContext';
import Toast from 'react-native-toast-message';
import Ionicons from '@expo/vector-icons/Ionicons';
import mobileAds, {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import { useEffect } from 'react';
import { View } from 'react-native';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  useEffect(() => {
    (async () => {
      // Google AdMob will show any messages here that you just set up on the AdMob Privacy & Messaging page
      const { status: trackingStatus } =
        await requestTrackingPermissionsAsync();
      if (trackingStatus !== 'granted') {
        // Do something here such as turn off Sentry tracking, store in context/redux to allow for personalized ads, etc.
      }

      // Initialize the ads
      await mobileAds().initialize();
    })();
  }, []);

  return (
    <View>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}
      >
        <CheckInProvider>
          <Tabs
            screenOptions={{
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
            }}
          >
            <Tabs.Screen
              name="index"
              options={{
                title: 'Home',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="home" size={24} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="calendar"
              options={{
                title: 'Calendar',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="calendar" size={24} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="stats"
              options={{
                title: 'Stats',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="stats-chart" size={24} color={color} />
                ),
              }}
            />
          </Tabs>
          <Toast />
        </CheckInProvider>
      </SafeAreaView>
    </View>
  );
}
