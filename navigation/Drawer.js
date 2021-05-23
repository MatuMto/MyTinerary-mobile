import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import Itineraries from '../screens/Itineraries'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import { CitiesStack, HomeStack, SignInStack, SignUpStack } from './Stack'

const drawer = createDrawerNavigator()

const Drawer = ()=>{
    return (
        <drawer.Navigator>
            {/* <drawer.Screen name='hola!' /> */}
            
            <drawer.Screen name="home" component={HomeStack}
                options={{headerShown: false}}
            /> 
            {/* El name es como voy a llamar a la ruta, podria ponerle cualquier cosa */}
            <drawer.Screen name="cities" component={CitiesStack} />
            {/* <drawer.Screen name="itineraries" component={Itineraries} /> */}
            <drawer.Screen name="signIn" component={SignInStack} />
            <drawer.Screen name="signUp" component={SignUpStack} />
        </drawer.Navigator>
    )
}

export default Drawer


