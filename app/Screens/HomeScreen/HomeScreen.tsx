import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderTab from '@/components/HeaderTab'
import { Colors } from '@/constants/Colors'
import { category } from '@/data/data'
import Category from '@/components/Category'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderTab/>
      <View style={styles.hero}>
        <View style={styles.heroLeft}>
          <Text style={{
            fontSize: 18,
            fontFamily:"outfit",
            color: Colors.WHITE_SMOKE,
            textAlign: "left",
          }}>Get a weekend offer</Text>
          <Text style={{
            fontSize: 24,
            fontFamily:"outfit-bold",
            color: Colors.WHITE,
            textAlign: "left",
          }}>Up to 30%</Text>
          <TouchableOpacity
          style={{
            marginTop: 10,
            width: "auto",
            paddingHorizontal: 18,
            paddingVertical: 8,
            borderRadius: 5,
            backgroundColor: Colors.WHITE_SMOKE,
            display: "flex",
            alignItems: "center",
            justifyContent: 'center'
          }}
          >
            <Text style={{
              color:Colors.PRIMARY,
              fontFamily: "outfit-medium",
              fontSize: 22,
              textAlign: "center"
            }}>Order now</Text>
          </TouchableOpacity>
        </View>
        <Image 
        source={require("@/assets/images/pizza.png")}
        alt='pizza'
        style={{
          width: 220,
          height: 140,
          objectFit: 'contain',
          right: -35,
          bottom: 15
        }} />
      </View>

      <Text style={{
        fontSize: 24,
        fontFamily: "outfit-medium",
        paddingTop: 10

      }}>Categories</Text>
        <FlatList
        data={category}
        renderItem={({item}) =>(
          <Category image={item.img} title={item.title}/>
        )}
        style={styles.scrollView}
        horizontal={true}
        scrollEnabled={false}
        
        />

        <Text>Top picks</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flexDirection:"column",
    padding: 20,
    backgroundColor: Colors.WHITE_SMOKE,
    width: "100%",
    height:"100%",
    justifyContent:"flex-start"
  },
  hero:{
    width: "100%",
    height: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 20,
  },
  heroLeft:{
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "auto",
    height: "100%",
    justifyContent:"flex-start",
  },
  scrollView:{
    marginTop: 10,
    height: 200
  }
})