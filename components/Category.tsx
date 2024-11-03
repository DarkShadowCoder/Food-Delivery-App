import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const Category = (props) => {
  return (
    <View style={styles.container}>
        <View style={{
            padding: 10,
            backgroundColor: Colors.SECONDARY,
            borderRadius: 15,
            width: '100%',
            height:65,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
        <Image 
        source={props.image}
        style={styles.image}
        />
        </View>
        
        <Text style={{
            fontSize: 20,
            fontFamily: "outfit-medium",
            color:Colors.BLACK,
            textAlign: "center",
        }}> {props.title} </Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        gap: 5,
        alignItems: "center",
        flexDirection: 'column',
        width: 65,
        height: 115,
        marginHorizontal: 6
    },
    image:{
        objectFit: 'fill',
        padding: 5,
        width: 60,
        height: 60,
        borderRadius: 99,
    }
})