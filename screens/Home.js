import React, { useEffect } from 'react'
import {Text, View, StyleSheet, StatusBar, Image, ScrollView, ImageBackground, Button, TouchableHighlight} from 'react-native'
import axios from 'axios'
import Header from '../components/Header'

const Home = (props)=>{
  return (
    <>
      <View style={styles.homeMainContainer}>
        
          <Image style={styles.homeBackgroundImage} source={require('../assets/thailand.jpg')} />
          <Header properties={{
            screen: 'Home',
            fatherProps: props
            }} />
          
          <View style={styles.homeContainer}>
              <TouchableHighlight underlayColor="#DDDDDD" onPress={()=> props.navigation.navigate('Cities')} style={styles.buttonContainer} >
                <Text style={styles.buttonText}>Let's Go!</Text>
              </TouchableHighlight>
              <Text style={styles.slogan}>Find your perfect Trip</Text>
              {/* <Button title="Ir a cities" onPress={()=> props.navigation.navigate('cities')} />             */}
          </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    // justifyContent: 'flex-end'
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
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
    // backgroundColor: 'green'
    // height: '60%',
  },
  buttonContainer: {
    borderWidth: 3,
    borderColor: 'black',
    padding: 8,
    width: '30%',
    alignItems: 'center',
    borderRadius: 8,
    // backgroundColor: 'rgb(235,235,235)'
    backgroundColor: '#B9B9B9'
    // alignSelf: 'center',
    // marginTop: '50%'
  },
  buttonText: {
    fontSize: 22,
    color: 'black',
    // borderWidth: 2,
    // borderColor: 'black'
  },
  slogan: {
    fontSize: 30,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold'
  }


})

export default Home