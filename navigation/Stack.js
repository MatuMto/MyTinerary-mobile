import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import Itineraries from '../screens/Itineraries'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Activities from '../screens/Activities'

const stack = createStackNavigator()

export const HomeStack = ()=>{
    return(
        <stack.Navigator>
            <stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        </stack.Navigator>
    )
}

export const CitiesStack = ()=>{
    return(
        <stack.Navigator>
            <stack.Screen name="Cities" component={Cities} options={{headerShown: false}} />
            <stack.Screen name="Itineraries" component={Itineraries}  />
            <stack.Screen name="Activities" component={Activities} />
        </stack.Navigator>
    )
}

export const SignInStack = ()=>{
    return(
        <stack.Navigator>
            <stack.Screen name="Sign In" component={SignIn} />
        </stack.Navigator>
    )
}

export const SignUpStack = ()=>{
    return( 
        <stack.Navigator>
            <stack.Screen name="Sign Up" component={SignUp} />
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


