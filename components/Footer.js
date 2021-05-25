import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const Footer = ()=>{
    return (
        <View style={styles.footerContainer} >
            <View style={styles.textContainer} >
                <Text>MyTinerary | All rights reserved</Text>
                <Text>Designed and Developed by Mateo Lorenzo</Text>
            </View>
            <View style={styles.iconsContainer} >
                <TouchableHighlight onPress={()=>console.log('Insta Icon')} underlayColor="#DDDDDD" >
                    <FontAwesome5 name="instagram" size={24} color="black" />
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>console.log('Facebook Icon')} underlayColor="#DDDDDD" >
                    <FontAwesome name="facebook" size={24} color="black" />
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>console.log('WhatsApp Icon')} underlayColor="#DDDDDD">
                    <FontAwesome5 name="whatsapp" size={24} color="black" />
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>console.log('Mail icon')} underlayColor="#DDDDDD">
                    <Feather name="mail" size={24} color="black" />
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        alignItems: 'center'
    },
    textContainer: {
        // backgroundColor: 'green',
        alignItems: 'center',
    },
    iconsContainer: {
        // backgroundColor: 'yellow',
        marginTop: 20,
        marginBottom: 100,
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
        
    }
})

export default Footer

