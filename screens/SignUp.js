import React, { useState, useEffect } from 'react'
import {ScrollView, StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native'
import { connect } from 'react-redux'
import Header from '../components/Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';
import authActions from '../redux/actions/authActions'



const signUp = (props) => {

    const [userInfo, setUserInfo] = useState({name: '', lastName: '', mail: '', password: '', image: '', country: '' })
    useEffect(()=>{
        const userIsLogged = async()=>{
            await AsyncStorage.getItem('userLogged') && console.log('hay un usuario logeado')
            const usuarioLogeado = await AsyncStorage.getItem('userLogged')
            console.log(usuarioLogeado)
        }
        userIsLogged()
    },[])

    const readInput = (inputValue, field)=>{
        setUserInfo({
            ...userInfo,
            [field]: inputValue
        })
        // console.log(userInfo)
    }

    const sendInfo = async(info)=> {
        if(userInfo.name === ''){
            Alert.alert('Oops!', 'You forgot to complete your name field! :D',[
                {text: 'UNDERSTOOD'}
            ])
        } else if(userInfo.lastName === ''){
            Alert.alert('Oops!', 'You forgot to complete your Last Name field! :D',[
                {text: 'UNDERSTOOD'}
            ])
        } else if(userInfo.mail === ''){
            Alert.alert('Oops!', 'You forgot to complete your Mail field! :D',[
                {text: 'UNDERSTOOD'}
            ])
        } else if(userInfo.password === ''){
            Alert.alert('Oops!', 'You forgot to complete your Password field! :D',[
                {text: 'UNDERSTOOD'}
            ])
        } else if(userInfo.image === ''){
            Alert.alert('Oops!', 'You forgot to complete your Image field! :D',[
                {text: 'UNDERSTOOD'}
            ])
        } else if(userInfo.country === ''){
            Alert.alert('Oops!', 'You forgot to complete your Country field! :D',[
                {text: 'UNDERSTOOD'}
            ])
        } else {
            const response = await props.registerUser(info)
            if(response){
                props.navigation.navigate('Home')
            }
        }
    }


    return (
        <ScrollView style={styles.container}>
        <Header properties={{screen: 'Home', fatherProps: props}} />
          <View style={styles.titleContainer}>
              <Text style={styles.title} >Sign Up!</Text>
          </View>
          <View style={styles.inputContainer}>
              <TextInput 
                  placeholder="Name"
                  placeholderTextColor={'black'}    
                  style={styles.textInput}
                  onChangeText={(e)=>readInput(e,'name')}
              />
              <TextInput
                  placeholder="Last Name" 
                  placeholderTextColor={'black'}  
                  style={styles.textInput}
                  onChangeText={(e)=>readInput(e,'lastName')}
              />
              <TextInput
                  placeholder="Mail" 
                  placeholderTextColor={'black'} 
                  style={styles.textInput}
                  onChangeText={(e)=>readInput(e,'mail')}
              />
              <TextInput
                  placeholder="Password" 
                  placeholderTextColor={'black'} 
                  style={styles.textInput}
                  secureTextEntry={true}
                  onChangeText={(e)=>readInput(e,'password')}
              />
              <TextInput
                  placeholder="Image" 
                  placeholderTextColor={'black'} 
                  style={styles.textInput}
                  onChangeText={(e)=>readInput(e,'image')}
              />
              {/* <TextInput
                  placeholder="Country" 
                  placeholderTextColor={'black'} 
                  style={styles.textInput} 
                  onChangeText={(e)=>readInput(e,'country')}
              /> */}
              <View style={styles.selectContainer}>
                  <RNPickerSelect
                      onValueChange={(value) => readInput(value, 'country')}
                      useNativeAndroidPickerStyle={false}
                      // style={customPickerStyles.inputAndroid}
                      style={
                          Platform.OS === 'ios'
                            ? customPickerStyles.inputIOS
                            : customPickerStyles.inputAndroid
                        }
                      placeholder={{ label: "Country", value: null }}
                      items={[
                          { label: 'Argentina', value: 'Argentina' },
                          { label: 'New Zealand', value: 'New Zealand' },
                          { label: 'Korea', value: 'Korea' },
                          { label: 'Brazil', value: 'Brazil' },
                          { label: 'Indonesia', value: 'Indonesia' },
                          { label: 'United States', value: 'United States' },
                          { label: 'Switzerland', value: 'Switzerland' },
                          { label: 'Sweden', value: 'Sweden' },
                          { label: 'Finland', value: 'Finland' },
                      ]}
                  />
              </View>


              <TouchableHighlight underlayColor="#DDDDDD" onPress={()=>sendInfo(userInfo)} style={styles.signInButtonContainer}>
                  <Text style={styles.signInButton}>Sign Up</Text>
              </TouchableHighlight>
          
          </View>
          
      </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(186,230,229)',
    },
    titleContainer: {
        // backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
    },
    inputContainer: {
        alignItems: 'center',
    },
    textInput: {
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "black",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        // paddingRight: 40,
        width: '60%',
        // textAlign: 'center',
        borderRadius: 4
    },
    selectContainer: {
        backgroundColor: 'rgb(235,235,235)',
        // height: 100,
        width: '60%',
        color: 'black',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "black",
        // paddingTop: 10,
        // paddingBottom: 10,
        paddingLeft: 15,
        borderRadius: 4

    },
    countrySelect: {
        color: 'black'
    },
    signInButtonContainer: {
        // backgroundColor: 'green',
        // alignItems: 'center',
        width: '30%',
        marginHorizontal: 'auto',
        borderRadius: 4,
    },
    signInButton: {
        fontSize: 22,
        backgroundColor: '#3ABBD8',
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 4,
        color: 'white',
        textAlign: 'center'
    }

})


const customPickerStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 14,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 14,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
 
const mapStateToProps = (state)=> {
    return{
        userLogged: state.auth.userLogged
    }   
}

const mapDispatchToProps = {
    registerUser: authActions.registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(signUp)