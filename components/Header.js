import React, { useEffect } from 'react'
import {Text, View, StyleSheet, StatusBar, Image, ScrollView, ImageBackground, Button, TouchableHighlight, TouchableWithoutFeedback} from 'react-native'
import axios from 'axios'

// import { Icon, InlineIcon } from '@iconify/react';
import bxMenu from '@iconify-icons/bx/bx-menu';

// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const header = (props)=>{
  return (
    <>
        <View style={ props.properties.screen === 'home' ? styles.homeHeader : styles.citiesHeader } >
            <View>
                {/* <Button title="menu" onPress={()=>props.properties.fatherProps.navigation.openDrawer()} /> */}
                {/* <Text>options</Text> */}
                {/* <Icon icon={bxMenu} /> */}
                {/* <Icon
                  raised
                  name='heartbeat'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('hello')} 
                /> */}
                <Text onPress={()=>props.properties.fatherProps.navigation.openDrawer()}>

                <Icon name="bars" style={styles.menuIcon} />
              </Text>
            </View>

            <View style={styles.logoContainer}>
                <Image style={styles.logoImg} source={require('../assets/logo-finish.png')} />
                <Text style={styles.titulo}>MyTinerary</Text>
            </View>
            
            <TouchableWithoutFeedback 
              style={styles.userUnlogedContainer} 
              onPress={()=>console.log(props.properties.fatherProps.navigation.openDrawer())}
            >
                <Image style={styles.userUnloged} source={require('../assets/user-icon.png')} />
            </TouchableWithoutFeedback>
        </View>
          
    </>
  )
}

const styles = StyleSheet.create({
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'rgba(31, 160, 31, 0.090)'
  },
  citiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'rgba(0, 132, 255, 0.808)'
  },
  logoContainer: {
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    // backgroundColor: 'red',
    marginBottom: 15
  },
  logoImg:{
    width: 100,
    height: 50
  },
  titulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  userUnlogedContainer: {
    // backgroundColor: 'red',
    // borderRadius: 80
  },
  userUnloged: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  probando: {
    // backgroundColor: 'green'
  },
  menuIcon: {
    fontSize: 35,
    color:"#fff"
  }


})

export default header