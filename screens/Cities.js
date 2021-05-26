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
            await props.uploadCities()
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
                <Header properties={{screen: 'Home', fatherProps: props}} />


                <View style={styles.filterSectionContainer} >
                    <Text style={styles.callToAction} >Find your dreams city!</Text>
                    <TextInput placeholder="Search by Name"
                     onChangeText={(e) => props.citiesFilter(e)}  style={styles.filterInput} />
                </View>

                    {props.citiesFiltered.length > 0 &&
                    props.citiesFiltered.map(city => { 
                        return(
                            <View key={city._id} style={styles.cityContainer} >
                                <TouchableHighlight 
                                    style={styles.touchableHighlight}
                                    onPress={()=>props.navigation.navigate('Itineraries',{id: city._id})}
                                >
                                    <Image source={{uri: city.img }} style={styles.cityImg} />
                                </TouchableHighlight>
                                <Text style={styles.cityName}>{city.cityName} - {city.country}</Text>
                            </View>
                        ) 
                    })}
            
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
        borderBottomColor: 'grey',
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
        backgroundColor: 'rgb(212, 212, 212);',
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    }, 
    touchableHighlight: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 5,
    },
    cityImg: {
        width: '100%',
        height: 200,
        // borderRadius: 25
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    }, 
    cityName: {
        fontSize: 20,
        marginVertical: 4
    }
})

const mapStateToProps = (state)=>{
    return {
        citiesList: state.cities.allCities,
        citiesFiltered: state.cities.citiesFilter
    }
}

const mapDispatchToProps = {
    uploadCities: citiesActions.uploadCities,
    citiesFilter: citiesActions.citiesFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(cities)