import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'

const itineraries = (props)=>{

    const [selectedCity, setSelectedCity] = useState({})
    // const [itineraryComments, setItineraryComments]= useState([])
    const [prueba, setPrueba] = useState('')


    useEffect(()=>{
        const receivedId = props.route.params.id 
        props.callSingleCityItineraries(receivedId)
        const leerAsyncStorage = async()=>{
            const info = await AsyncStorage.getItem('prueba') 
            setPrueba(info)
        }
        leerAsyncStorage()


        if(props.allCities.length > 0){
            setSelectedCity(props.allCities.find(city => city._id === receivedId))
        } else {
            const fetchData = async()=>{
                const response = await props.callSingleCity(receivedId)
                setSelectedCity(response)
            }
            fetchData()
        }
    },[])
    console.log(selectedCity)
    // console.log('me rerenderice xd')

    console.log(prueba)
    return (
        <ScrollView style={styles.itinerariesSectionContainer} >
            <View style={styles.itinerariesContainer}>
                {/* <Text>{prueba}</Text> */}
                {props.selectedCityItineraries.length > 0 
                    ? props.selectedCityItineraries.map(itinerary => {
                        return(
                        <View key={itinerary._id} style={styles.itineraryContainer}>
                            <View styles={styles} >
                                <View style={styles.itineraryTitleContainer} >
                                    <Text style={styles.textTwentyPx} >- {itinerary.tittle} -</Text>
                                </View>

                                <TouchableHighlight onPress={()=>props.navigation.navigate('Activities', {itinerary, selectedCity})} >
                                    <Image source={{uri: itinerary.images[0]}} style={styles.activityImg} underlayColor="#DDDDDD" />
                                </TouchableHighlight>
                                

                                <View style={styles.priceAndDurationContainer} >
                                    {/* <View style={styles.priceAndLikesContainer} >  */}
                                        <View style={styles.priceContainer} >
                                            <Text style={styles.textTwentyPx}>Price</Text>
                                            <View style={styles.dolarIconsContainer}>
                                                {new Array(itinerary.price).fill(0).map((element, index) => <Icon name="money" key={index} style={styles.dolarIcon} />)}
                                            </View>
                                        </View>
                                        {/* <View style={styles.likesContainer} >
                                            <AntDesign name="hearto" style={styles.heartIcon}/>
                                            <Text style={styles.textTwentyPx}>3</Text>
                                        </View> */}
                                    {/* </View> */}
                                    
                                    <View style={styles.verticalBar}></View>

                                    <View style={styles.durationContainer}>
                                        <Text style={styles.textTwentyPx}>Duration </Text>     
                                        <View style={styles.clockIconsContainer} >
                                            {new Array(itinerary.duration).fill(0).map((element, index) =><AntDesign name="clockcircleo" key={index} style={styles.clockIcon}/>)}
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.hashtagsContainer} >
                                    {itinerary.hashtags.map((hashtag, index) =>{
                                        return(
                                            <Text key={index} style={styles.hashtag}>#{hashtag}</Text>    
                                        )
                                    })}
                                </View>                               
                            </View>
                        </View>
                    )})
                : <View style={styles.messageGeneralContainer}>
                    <Text style={styles.textMessage1}>Oops, looks like there are any itineraries for this city :c</Text>
                    <Text style={styles.textMessage2}>We'll have some soon!</Text>
                    <Image style={styles.extraImage} source={{uri: 'https://i.pinimg.com/564x/78/f8/e2/78f8e2c995342709c3594f5cf2b1a22f.jpg'}} />
                </View>
                
                }
                    
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    itinerariesSectionContainer: {
        flex: 1,
        // backgroundColor: 'red'
    },
    itinerariesContainer: {
        // backgroundColor: 'green',
        alignItems: 'center',
        // height: '100%', 
        width: '100%'
        // flex: 1
    },
    itineraryContainer: {
        // backgroundColor: 'pink',
        width: '70%',
        marginVertical: 20,
    },
    itineraryTitleContainer: {
        alignItems: 'center'
    },
    activityImg: {
        height: 200,
        width: '100%',
        borderRadius: 3
    },
    priceAndDurationContainer: {
        flexDirection: 'row',
        // backgroundColor: 'lightblue',
        justifyContent: 'space-around',
        // alignItems: 'center'
        // backgroundColor: 'green'
    },
    priceAndLikesContainer: {
        // backgroundColor: 'red',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // marginVertical: 5
    },
    priceContainer: {
        // backgroundColor: 'pink',
        // flexDirection: 'row',
        // backgroundColor: 'green',
        alignItems: 'center',
        width: '40%',
        marginTop: 10
    },
    dolarIconsContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    dolarIcon: {
        fontSize: 20,
        color: '#39AF62',
        marginLeft: 5
    },  
    verticalBar: {
        height: '50%',
        width: 3,
        backgroundColor: 'grey',
        borderRadius: 5,
        alignSelf: 'center'
    },
    durationContainer:{
        // flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'green',
        width: '40%',
        // height: 200,
        flexWrap: 'nowrap',
        marginTop: 10

    },
    clockIconsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 5
        // backgroundColor: 'green',
        // width: 90
    },
    clockIcon: {
        fontSize: 22,
        color: '#35AECA',
        marginLeft: 10,
        marginBottom: 5
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    heartIcon: {
        fontSize: 20,
        color: 'red',
        marginRight: 3
    },
    hashtagsContainer: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    }, 
    hashtag: {
        color: 'blue'
    },
    textTwentyPx: {
        fontSize: 20
    }, 
    messageGeneralContainer: {
        height: 600,
        width: '100%',
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textMessage1: { 
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    textMessage2: { 
        fontSize: 20
    },
    extraImage: {
        width: '90%',
        height: 500,
        borderRadius: 10
    }

})





const mapStateToProps = (state)=>{
    return {
        allCities: state.cities.allCities,
        selectedCityItineraries: state.itineraries.selectedCityItineraries        
    }
}

const mapDispatchToProps = {
    callSingleCityItineraries: itinerariesActions.callSingleCityItinearies,
    callSingleCity: citiesActions.callSingleCity

    // callSingleCityItinearies: itinerariesActions.callSingleCityItinearies,
    // callSingleCity: citiesActions.callSingleCity
}

export default connect(mapStateToProps, mapDispatchToProps)(itineraries)