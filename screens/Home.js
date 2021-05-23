import React, { useEffect } from 'react'
import {Text, View, StyleSheet, StatusBar, Image, ScrollView, ImageBackground, Button} from 'react-native'
import axios from 'axios'
import Header from '../components/Header'

const Home = (props)=>{
  return (
    <>
      <View style={styles.homeMainContainer}>
        
          <Image style={styles.homeBackgroundImage} source={require('../assets/thailand.jpg')} />
          {/* <Header screen={'home'} /> */}
          <Header properties={{screen: 'home', fatherProps: props}} />
          
          <View style={styles.homeContainer}>
              {/* <Button title="Ir a cities" onPress={()=> props.navigation.navigate('cities')} />             */}
              {/* <Button title="menu" onPress={()=> props.navigation.openDrawer()} />             */}
          </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
  },
  homeBackgroundImage: {
    // justifyContent: "center",
    // resizeMode: "cover",
    // flex: 1, 
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  homeContainer: {
    // width: '100%',
    // flex: 1
    // height: '60%',
  }


})

export default Home