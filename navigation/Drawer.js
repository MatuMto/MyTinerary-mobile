import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer'
import React from 'react'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import Itineraries from '../screens/Itineraries'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import { CitiesStack, HomeStack, SignInStack, SignUpStack } from './Stack'
import { connect } from 'react-redux'
import LogOutStack from './LogOutStack'

const drawer = createDrawerNavigator()

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </DrawerContentScrollView>
    );
  }

const Drawer = (props)=>{
    return (
        <drawer.Navigator
            // drawerContent={props => <CustomDrawerContent {...props} />}
            overlayColor="transparent"
        >            
            <drawer.Screen name="Home" component={HomeStack}
                options={{headerShown: false}}
            /> 
            {/* El name es como voy a llamar a la ruta, podria ponerle cualquier cosa */}
            <drawer.Screen name="Cities" component={CitiesStack} />

            {!props.userLogged && <drawer.Screen name="Sign In" component={SignInStack}/>}
            {!props.userLogged && <drawer.Screen name="Sign Up" component={SignUpStack}/>}
            
            {props.userLogged &&
              <drawer.Screen name="Log out" component={LogOutStack} />
            }
        </drawer.Navigator>
    )
}

const mapStateToProps = (state)=> {
    return {
      userLogged: state.auth.userLogged
    }
  }

export default connect(mapStateToProps)(Drawer)


