import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import CartScreen from '../Screens/CartScreen/CartScreen'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import DeliveryScreen from '../Screens/DeliveryScreen/DeliveryScreen'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import {Colors} from '@/constants/Colors'


const Tab = createBottomTabNavigator()
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
        <Tab.Screen 
        name='home' 
        component={HomeScreen} 
        options={{
            tabBarLabel: 'Home',
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarIcon:({color, size}) => (
                <Ionicons name='home' size={size} color={color}/>
            )
        }}
        />
        <Tab.Screen 
        name='Delivery' 
        component={DeliveryScreen} 
        options={{
            tabBarLabel: 'Delivery',
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarIcon:({color, size}) => (
                <Ionicons name='heart' size={size} color={color}/>
            )
        }}
        />
        <Tab.Screen 
        name='cart' 
        component={CartScreen} 
        options={{
            tabBarLabel: 'Cart',
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarIcon:({color, size}) => (
                <FontAwesome name='cart-plus' size={size} color={color}/>
            )
        }}
        />
        <Tab.Screen 
        name='profile' 
        component={ProfileScreen} 
        options={{
            tabBarLabel: 'Profile',
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarIcon:({color, size}) => (
                <FontAwesome name='user-circle' size={size} color={color}/>
            )
        }}
        />
        
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})