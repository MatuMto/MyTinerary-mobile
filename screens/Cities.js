import React, { useEffect, useState } from 'react'
import {StyleSheet, Text, View, Image, ScrollView, TextInput, Button, TouchableHighlight} from 'react-native'
import Header from '../components/Header'
import citiesActions from '../redux/actions/citiesActions'

import axios from 'axios'
import { connect } from 'react-redux'



const cities = (props)=>{

    const [allCities, setAllCities] = useState([])
    const [filterValue, setFilterValue] = useState('')

    useEffect(()=>{
        const fetchear = async()=> {
            const respuesta = await axios.get('https://mytinerarylorenzo.herokuapp.com/api/cities')
            setAllCities(respuesta.data.respuesta)
        }
        fetchear()  
    }, [])

    console.log(filterValue)

    const pruebaFunction = ()=>{
        console.log('hola')
    }
    return (
        <>
            <ScrollView style={styles.citiesContainer}>
                {/* <Image source={require('../assets/fondo.jpg')} style={styles.backgroundImage} /> */}
                <Header properties={{screen: 'home', fatherProps: props}} />


                <View style={styles.filterSectionContainer} >
                    <Text style={styles.callToAction} >Find your dreams city!</Text>
                    <TextInput placeholder="Search by Name" onChangeText={(e)=>setFilterValue(e)} style={styles.filterInput} />
                </View>

                <View>
                    {allCities.map(city => { 
                        return(
                            <View key={city._id} style={styles.cityContainer} >
                                <TouchableHighlight 
                                    style={styles.touchableHighlight}
                                    onPress={()=>props.navigation.navigate('itineraries',{nombre: city.cityName})}
                                    >
                                    {/* <View style={styles.imageSpace}></View> */}
                                    <Image source={{uri: city.img }} style={styles.cityImg} />
                                </TouchableHighlight>
                                <Text style={styles.cityName} >{city.cityName}</Text>
                            </View>
                        ) 
                    })}
                </View>
            
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        width: '100%',
    },
    filterSectionContainer: {
        // backgroundColor: 'green',
        marginTop: 30,
        alignItems: 'center',
        marginBottom: 30

    },
    callToAction: {
        fontSize: 20
    },
    filterInput: {
        marginTop: 10,
        borderWidth: 1,
        borderBottomColor: 'black',
        width: '40%',
        borderRadius: 4,
        paddingLeft: 15
        // textAlign: 'center'
    },
    citiesContainer: {
        // marginTop: 35,
        flex: 1,
        // backgroundColor: 'green'
    },
    cityContainer: {
        // backgroundColor: 'green',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        alignItems: 'center'
    }, 
    touchableHighlight: {
        width: '80%',
        alignItems: 'center',
        borderRadius: 5
    },
    imageSpace: {
        width: '100%',
        // width: 250,
        height: 200,
        backgroundColor: 'red',
        borderRadius: 5
    },
    cityImg: {
        width: '100%',
        height: 200,
        borderRadius: 5

    }, 
    cityName: {
        fontSize: 20
    }
})


export default cities