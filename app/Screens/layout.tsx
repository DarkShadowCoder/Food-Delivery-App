import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import GetStartedScreen from './GetStartedScreen/GetStartedScreen'
import HomeScreen from './HomeScreen/HomeScreen'

const Stack = createNativeStackNavigator()
const RootLayout = () => {
  /*return (
    <Stack.Navigator>
        <Stack.Screen name='getStarted' component={GetStartedScreen}/>
        <Stack.Screen name='home' component={HomeScreen}/>
    </Stack.Navigator>
  )*/
 return(
  <View>
    <Text>ljhgxgwvbn,;</Text>
  </View>
 )
}

export default RootLayout

const styles = StyleSheet.create({})