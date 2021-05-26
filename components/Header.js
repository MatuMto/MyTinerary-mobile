import React, { useEffect } from 'react'
import {Text, View, StyleSheet, StatusBar, Image, ScrollView, ImageBackground, Button, TouchableHighlight, TouchableWithoutFeedback} from 'react-native'
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons'; 

// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { connect } from 'react-redux';


const header = (props)=>{

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  // console.log(props)
  // const userImage = props.userLogged 
  //   ? props.userLogged.image 
  //   : <FontAwesome5 name="user-alt" size={24} color="white" />

  if(!fontsLoaded){
    return null
  }else {
  return (
    <>
        {/* <View style={ props.properties.screen === 'Home' ? styles.homeHeader : styles.citiesHeader } > */}
        <View style={ props.properties.screen === 'Home' ? styles.homeHeader : styles.citiesHeader } >
            <View style={styles.barsIconContainer} >
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
              {props.userLogged ? props.userLogged.image
               ? <Image style={styles.userLoggedImage} source={{uri: props.userLogged.image}} />
               : <Image style={styles.userUnloged} source={require('../assets/user-icon.png')} />
               : <Image style={styles.userUnloged} source={require('../assets/user-icon.png')} />
               }
            </TouchableWithoutFeedback>
        </View>
          
    </>
  )}
}

const styles = StyleSheet.create({
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'rgba(31, 160, 31, 0.090)'
    // backgroundColor: 'red'
  },
  citiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'rgba(0, 132, 255, 0.808)'
  },
  barsIconContainer: {
    // backgroundColor: 'green',
    width: '15%'
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
    fontSize: 20,
    fontFamily: 'Inter_900Black'
  },
  userUnlogedContainer: {
    // backgroundColor: 'red',
    // borderRadius: 80
  },
  userUnloged: {
    width: '15%',
    height: 60,
    borderRadius: 20
  },
  userLoggedImage: {
    width: '15%',
    height: 60,
    borderRadius: 200
  },
  probando: {
    // backgroundColor: 'green'
  },
  menuIcon: {
    fontSize: 35,
    color:"#fff"
  }


})

const mapStateToProps = (state)=> {
  return {
    userLogged: state.auth.userLogged
  }
}

export default connect(mapStateToProps)(header)