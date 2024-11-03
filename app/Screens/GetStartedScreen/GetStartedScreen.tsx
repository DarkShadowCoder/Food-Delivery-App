import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const GetStartedScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={require('@/assets/images/livreur.png')} style={styles.image}/>
        <Text style={styles.title}>Welcome to FoodSprint</Text>

        <View style={{
            display:'flex',
            flexDirection: 'column',
            gap: 10,
            width: "auto",
            height: 'auto',
            padding: 5
        }}>
            <TouchableOpacity style={styles.button1}>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize: 22,
                    color: Colors.WHITE,
                }}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize: 22,
                    color: Colors.BLACK,
                }}>
                    Signup
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default GetStartedScreen

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        width: '100%',
        height: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        gap: 25,
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    image:{
        objectFit: 'contain',
        width: "100%",
        height: "65%",
        marginVertical: 15,
    },
    title:{
        color: Colors.PRIMARY,
        fontSize: 38,
        fontFamily: "outfit-medium",
        textAlign: "center",
        letterSpacing: 1,
    },
    button1:{
        width: 190,
        height: 45,
        paddingVertical: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10
    },
    button2:{
        width: 190,
        height: 45,
        paddingVertical: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.SECONDARY,
        borderRadius: 10
    }
})