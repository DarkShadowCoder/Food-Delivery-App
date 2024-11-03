import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const Product = (props:any) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} alt="" style={styles.image} />
      <View style={styles.subContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{props.productName}</Text>
            <Text style={styles.title}>$ {props.productPrice}</Text>
        </View>
        <View style={styles.desContainer}>
            <View style={styles.desContainerLeft}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "auto",
                    height: "auto",
                    gap: 5,
                    alignItems: "center",
                }}>
                    <Ionicons name="star-sharp" size={10} color={"#ff8000"} />
                    <Text style={{
                        color: Colors.BLACK,
                        fontFamily: "outfit",
                        fontSize: 15,
                        textAlign: "center"
                    }}> {props.note} </Text>
                </View>
                <View style={{
                    display:"flex",
                    flexDirection: "row",
                    gap: 5,
                    width: "auto",
                    height: "auto",
                    alignItems: "center",
                }}>
                    <Ionicons name="locate-sharp" size={10} color={Colors.GRAY} />
                    <Text style={{
                        fontSize: 15,
                        fontFamily: "outfit",
                        color: Colors.GRAY,
                        textAlign: "center"
                    }}>20-25min</Text>
                </View>
            </View>
            <View style={styles.desContainerRight}>
                <View style={{
                    width:"auto",
                    height:"auto",
                    padding: 5,
                    borderRadius: 99,
                    backgroundColor: Colors.PRIMARY
                }}>
                    <Ionicons name="bookmarks-sharp" size={18} color={Colors.WHITE} />
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: "nowrap",
        width:"48%",
        minWidth: 180,
        height: 210,
        gap: 8,
        borderRadius: 20,
        overflow: "hidden",
        shadowColor: Colors.BLACK,
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 3,
        shadowOffset: {width:2, height:2},
        backgroundColor: Colors.WHITE
    },
    image:{
        width:"100%",
        height: 120,
        objectFit: 'fill',
    },
    subContainer:{
        display:'flex',
        flexDirection:'column',
        gap: 1,
        justifyContent: 'space-between',
        padding: 5,
        paddingBottom: 10,
        alignItems:"center",
        width: '100%',
        height: 65
    },
    title:{
        fontFamily: 'outfit-medium',
        fontSize: 17,
        color:Colors.BLACK
    },
    textContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: "auto",
    },
    desContainer:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: "100%",
        height: "auto"
    },
    desContainerLeft:{
        display: "flex",
        flexDirection: "column",
        alignItems: 'baseline',
        width: "auto",
        height:"auto",
        gap: 5,
    },
    desContainerRight:{
        width:"auto",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    }


})