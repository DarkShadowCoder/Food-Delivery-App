import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={30} color={Colors.BLACK} onPress={()=>console.log("Back")}/>
        <Text style={{
            fontSize: 35,
            fontFamily: "outfit-medium",
        }}>Wonton Noodles soup</Text>
      </View>
      <Image 
      source={require('@/assets/images/ramen.jpg')}
      style={{
        width: 280,
        height: 280,
        objectFit: 'fill',
        position: 'absolute',
        top: "25%",
        borderRadius: 500,
        left: "17%",
        zIndex: 30

      }} />
      <View style={styles.subContainer}>
        <Text style={{
            fontSize: 25,
            fontFamily: "outfit-medium",
            color: Colors.BLACK,
            paddingHorizontal: 15,
        }}>Description</Text>
        <Text style={{
            fontSize: 20,
            fontFamily: "outfit",
            textAlign:"left",
            color: Colors.GRAY,
            paddingHorizontal: 15,
        }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam at fugiat vel officiis et ratione, 
            illo fugit facere commodi eius necessitatibus culpa 
            ipsa error deserunt maiores earum ullam minus quis.
        </Text>

        <View style={styles.featureContainer}>
            <View style={styles.feature}>
                <Text style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    textAlign: "center"
                }}>Delivery</Text>
                <Text style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    textAlign: "center"
                }}>30min</Text>
            </View>
            <View style={styles.feature}>
                <Text style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    textAlign: "center"
                }}>Calories</Text>
                <Text style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    textAlign: "center"
                }}>311</Text>
            </View>
            <View style={styles.feature}>
                <Text style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    textAlign: "center"
                }}>Rating</Text>
                <View style={{
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Ionicons name="star-sharp" size={15} color="#ff8000"/>
                   <Text style={{
                        fontFamily: "outfit",
                        fontSize: 18,
                        textAlign: "center"
                    }}>4.1</Text> 
                </View>
            </View>
        </View>
        <Text style={{
            fontSize: 25,
            fontFamily: "outfit-medium",
            color: Colors.BLACK,
            paddingHorizontal: 15,
        }}>Ingredients</Text>
        <View style={styles.featureContainer}>
            <View style={styles.ingredient}>
                <Ionicons name="cog" size={20} color="#ff8000" />
                <Text style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    textAlign: "center"
                }}>Egg</Text>
            </View>
            <View style={styles.ingredient}>
                <Ionicons name="cog" size={20} color="#ff8000" />
                <Text style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    textAlign: "center"
                }}>Corn</Text>
            </View>
            <View style={styles.ingredient}>
                <Ionicons name="cog" size={20} color="#ff8000" />
                <Text style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    textAlign: "center"
                }}>Shrimp</Text>
            </View>
        </View>
        <View style={styles.footer}>
            <View style={styles.footerLeft}>
                <Ionicons name="remove" size={15} color={Colors.BLACK} />
                <Text style={{
                    fontFamily: "outfit",
                    fontSize: 18
                }}>2</Text> 
                <Ionicons name="add" size={15} color={Colors.BLACK} />
            </View>
            <View style={styles.footerRight}>
                <TouchableOpacity>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: "outfit-medium",
                        color: Colors.WHITE_SMOKE
                    }}> Add to cart</Text>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 18,
                    fontFamily: "outfit-medium",
                    color: Colors.WHITE_SMOKE
                }}>$ 15.8</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 0,
        paddingTop: 35,
        backgroundColor: Colors.SECONDARY,
    },
    header:{
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    subContainer:{
        width: "100%",
        height: "60%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: Colors.WHITE_SMOKE,
        display: 'flex',
        flexDirection: 'column',
        justifyContent:"flex-end",
        gap: 10,
        position: "absolute",
        zIndex: 10,
        left: 0,
        bottom: 0
        
    },
    featureContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        width: "100%",
        height: "auto",
        paddingHorizontal: 15,
    },

    feature: {
        display: 'flex',
        flexDirection: "column",
        justifyContent:"space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        gap: 5,
        backgroundColor: Colors.GRAY,
        borderRadius: 20,
        width: "30%",
        height: "auto",

    },
    ingredient:{
        display: 'flex',
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 10,
        gap: 5,
        backgroundColor: Colors.GRAY,
        borderRadius: 12,
        height: "auto",
    },
    footer:{
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.SECONDARY,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 20,
        width: "100%",
        height: 80,
        marginTop: 10
    },
    footerLeft:{
        backgroundColor: Colors.WHITE_SMOKE,
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        gap: 7,
        borderRadius: 15,
        width: "30%",
        height: "80%"
    },
    footerRight:{
        backgroundColor: Colors.PRIMARY,
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        gap: 7,
        borderRadius: 15,
        width: "65%",
        height: "80%"
    }
})