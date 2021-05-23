import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native'
import React from 'react'
import { name as appName } from './app.json'

import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Itineraries from './screens/Itineraries'
import Cities from './screens/Cities'
import Header from './components/Header'
import {ScrollView, StatusBar,  StyleSheet, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Stack from './navigation/Stack';
import Drawer from './navigation/Drawer';

import {Provider} from 'react-redux'
import configureStore from './configureStore'

// const store = configureStore()

const App = ()=>{
  return (    
    // <Provider>
      <NavigationContainer>
        <StatusBar style={styles.statusBar}></StatusBar>
        {/* <Stack/> */}
        <Drawer/>
      </NavigationContainer>
    // {/* </Provider> */}
  )
}

const styles = StyleSheet.create({

})

// AppRegistry.registerComponent(appName, ()=>App)
export default App