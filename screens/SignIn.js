import React, { useState } from 'react'
import {ScrollView, StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native'
import Header from '../components/Header'

const SignIn = (props)=>{

    const [userInfo, setUserInfo] = useState({nombre: '', })

    const readInput = (inputValue, field)=>{
        setUserInfo({
            ...userInfo,
            [field]: inputValue
        })
        console.log(userInfo)
    }

    return (
        <ScrollView style={styles.container}>
          <Header properties={{screen: 'home', fatherProps: props}} />
            <View style={styles.titleContainer}>
                <Text style={styles.title} >Sign In!</Text>
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
                    onChangeText={(e)=>readInput(e,'password')}
                />
                <TextInput
                    placeholder="Image" 
                    placeholderTextColor={'black'} 
                    style={styles.textInput}
                    onChangeText={(e)=>readInput(e,'image')}
                />
                <TextInput
                    placeholder="Country" 
                    placeholderTextColor={'black'} 
                    style={styles.textInput} 
                    onChangeText={(e)=>readInput(e,'country')}
                />

                <TouchableHighlight underlayColor="#DDDDDD" onPress={()=>console.log('hola')} style={styles.signInButtonContainer}>
                    <Text style={styles.signInButton}>Sign In</Text>
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


export default SignIn