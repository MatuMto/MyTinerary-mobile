import {createStackNavigator} from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import Home from '../screens/Home'

const stack = createStackNavigator()

const LogOutStack = (props)=>{
    
    useEffect(()=>{
        const fetchear = async()=>{
            await props.logOutUser()
        }
        fetchear()
    },[])
    
    return (
        <stack.Navigator>
            <stack.Screen name="Log out" component={Home} options={{headerShown: false}} />
        </stack.Navigator>
    )
}

const mapDispatchToProps = {
    logOutUser: authActions.logOutUser
}

export default connect(null, mapDispatchToProps)(LogOutStack)