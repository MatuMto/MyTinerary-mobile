import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import Itineraries from '../screens/Itineraries'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const stack = createStackNavigator()

export const HomeStack = ()=>{
    return(
        <stack.Navigator>
            <stack.Screen name="home" component={Home} options={{headerShown: false}} />
        </stack.Navigator>
    )
}

export const CitiesStack = ()=>{
    return(
        <stack.Navigator>
            <stack.Screen name="cities" component={Cities} options={{headerShown: false}} />
            <stack.Screen name="itineraries" component={Itineraries}  />
        </stack.Navigator>
    )
}

export const SignInStack = ()=>{
    return(
        <stack.Navigator>
            <stack.Screen name="signIn" component={SignIn} />
        </stack.Navigator>
    )
}

export const SignUpStack = ()=>{
    return( 
        <stack.Navigator>
            <stack.Screen name="signUp" component={SignUp} />
        </stack.Navigator>
    )
}

// const Stack = ()=>{
//     return (
//         <stack.Navigator>
//             <stack.Screen name="home" component={Home}
//                 options={{headerShown: false}}
//             /> 
//             {/* El name es como voy a llamar a la ruta, podria ponerle cualquier cosa */}
//             <stack.Screen name="cities" component={Cities} />
//             <stack.Screen name="itineraries" component={Itineraries} />
//             <stack.Screen name="signIn" component={SignIn} />
//             <stack.Screen name="signUp" component={SignUp} />
//         </stack.Navigator>
//     )
// }

// export default Stack

