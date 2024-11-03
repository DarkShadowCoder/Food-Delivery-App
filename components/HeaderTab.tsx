import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const HeaderTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainerLeft}>
        <Text style={{
            fontFamily: "outfit",
            fontSize: 20,
            color: Colors.GRAY,
            textAlign: "justify"
        }}>Delivery now</Text>
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width:"auto",
            height: "auto",
            gap: 6,

        }}>
            <Ionicons name='location' size={25} color={Colors.PRIMARY}/>
            <Text style={{
                fontFamily: "outfit-bold",
                fontSize: 25,
                textAlign: "center",
                color: Colors.BLACK
            }}>Texas,USA</Text>
        </View>

        <View style={styles.subContainerRight}>
            <Ionicons name='search' size={40} color={Colors.BLACK}/>
            <Ionicons name='close' size={40} color={Colors.BLACK}/>
        </View>
      </View>
    </View>
  )
}

export default HeaderTab

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 100,
        paddingTop: 35,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subContainerLeft:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width:"auto",
        height: "100%",
        gap: 5,
    },
    subContainerRight:{
        display: 'flex',
        flexDirection: "row",
        width: 'auto',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    }
  }
)