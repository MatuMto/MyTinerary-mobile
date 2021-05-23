import React, { useState } from 'react'
import {ScrollView, StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native'
import Header from '../components/Header'

const signUp = (props) => {

    const [userInfo, setUserInfo] = useState({name: '', lastName: '', mail: '', password: '', image: '', country: '' })

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
                <Text style={styles.title} >Sign Up!</Text>
            </View>
            <View style={styles.inputContainer}>
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

            <TouchableHighlight style={styles.signUpButtonContainer}>
                <Text style={styles.signUpButton}>Sign Up</Text>
            </TouchableHighlight>
            
            </View>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(186,230,229)',
        // backgroundColor: 'red'
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
    signUpButtonContainer: {
        // backgroundColor: 'green',
        // alignItems: 'center',
        width: '30%',
        marginHorizontal: 'auto',
        borderRadius: 4,
    },
    signUpButton: {
        fontSize: 22,
        backgroundColor: '#3ABBD8',
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 4,
        color: 'white',
        textAlign: 'center'
    }

})


export default signUp