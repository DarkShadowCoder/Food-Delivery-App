import { useFonts } from 'expo-font';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import GetStartedScreen from './Screens/GetStartedScreen/GetStartedScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import TabNavigation from './Navigation/TabNavigation';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ProductScreen from './Screens/productScreen/ProductScreen';
;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "outfit": require('../assets/fonts/Outfit-Regular.ttf'),
    "outfit-medium": require('../assets/fonts/Outfit-Medium.ttf'),
    "outfit-bold": require('../assets/fonts/Outfit-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  
 /* return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screens" component={RootLayout} />
        <Stack.Screen name="+not-found" component={NotFoundScreen}/>
      </Stack.Navigator>
  );
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="getstarted" component={GetStartedScreen} options={require('./Screens/HomeScreen/HomeScreen')} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
  )*/
      return (
        <ProductScreen />
      )
}
