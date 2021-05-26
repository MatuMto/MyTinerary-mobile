import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native'
import React from 'react'
import {ScrollView, StatusBar,  StyleSheet, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Stack from './navigation/Stack';
import Drawer from './navigation/Drawer'; //este descomenté
import {Provider} from 'react-redux'
import {applyMiddleware, createStore } from 'redux';
import mainReducer from './redux/reducers/mainReducer';
import thunk from 'redux-thunk';
import Home from './screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { DrawerContent } from './navigation/DrawerContent';

// const Drawer = createDrawerNavigator() //Este lo creé recien

const store = createStore(mainReducer, applyMiddleware(thunk))

const App = ()=>{
  return (    
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style={styles.statusBar}></StatusBar>
        {/* <Stack/> */}
        <Drawer/>  
        {/* <DrawerContent/> */}

        {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/> }>
          <Drawer.Screen name="home" component={Home} />
        </Drawer.Navigator> */}

      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({

})

// AppRegistry.registerComponent(appName, ()=>App)
export default App