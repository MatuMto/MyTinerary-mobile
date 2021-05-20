import React from 'react'
import {Text, View, StyleSheet, StatusBar, Image} from 'react-native'

const App = ()=>{
  return (
    <>
      <StatusBar style={styles.statusBar}></StatusBar>
      <View style={styles.homeHeader} >
        <View>
          <Text>options</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImg} source={require('./assets/logo-finish.png')} />
          <Text style={styles.titulo}>MYtinerary</Text>
        </View>
        <View> 
          <Text>userPic</Text>
        </View>
      </View>
      <View style={styles.crecer1}></View>
      <View style={styles.crecer2}></View>
    </>
  )
}

const styles = StyleSheet.create({
  homeHeader: { 
    backgroundColor: 'rgb(109,191,184)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%'
  },
  logoContainer: {
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center'
  },
  logoImg:{
    width: 100,
    height: 50
  },
  titulo: {
    color: 'black',
  },
  crecer1: {
    backgroundColor:'black'
  },
  crecer2: {
    backgroundColor: 'grey'
  }
  
})

export default App