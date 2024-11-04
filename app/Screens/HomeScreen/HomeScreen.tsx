import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderTab from '@/components/HeaderTab'
import { Colors } from '@/constants/Colors'
import { category, food } from '@/data/data'
import Category from '@/components/Category'
import Product from '@/components/Product'
import { useQuery, gql } from '@apollo/client'


const get_food = gql`
    {
      categories{
        name
        image{
          url
          fileName
        }
      }
    }
`


const HomeScreen = () => {
  const {loading, error, data} = useQuery(get_food);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
    console.log("data",data.categories)
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
      <View>
        <FlatList
        data={data.categories}
        renderItem={({item}) =>(
          <Category image={require("@/assets/images/burger.webp")} title={item.name}/>
        )}
        style={styles.scrollView}
        horizontal={true}
        scrollEnabled={false}
        centerContent={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        />
      </View>
        <Text style={{
          fontSize: 24,
          fontFamily: "outfit-medium",
          paddingTop: 5
        }}>Top picks</Text>
      <View>
        <FlatList style={styles.productContainer}
        data={food.slice(0,2)}
        horizontal={true}
        renderItem={({item}) =>(
          <View style={{margin: 5}}>
            <Product image={item.img} productName={item.name} productPrice={item.price} note={item.note} />
          </View>
        )}
        scrollEnabled={true}
        
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      </View>
      <View style={{
        width: '100%',
        height: '100%',
      }}>
        <FlatList style={styles.productContainer}
          data={food.slice(2,4)}
          horizontal={true}
          renderItem={({item}) =>(
            <View style={{margin: 5}}>
              <Product image={item.img} productName={item.name} productPrice={item.price} note={item.note} />
            </View>
            
          )}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
    height: "auto",
    width: "100%",
    overflow: "hidden",
  },
  productContainer:{
    width: "100%",
    height: "auto",
    overflow: "scroll",
  }
})