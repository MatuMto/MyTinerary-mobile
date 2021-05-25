import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const itineraries = (props)=>{

    const [selectedCity, setSelectedCity] = useState({})

    useEffect(()=>{

        const receivedId = props.route.params.id 
        props.callSingleCityItineraries(receivedId)
        // console.log(receivedId)      
        console.log('Entré al useEffect')  
        if(props.allCities.length > 0){
            console.log('use redux')
            setSelectedCity(props.allCities.find(city => city._id === receivedId))
        } else {
            const fetchData = async()=>{
                console.log('Entré al fetchData')
                const response = await props.callSingleCity(receivedId)
                // console.log(response)
                setSelectedCity(response)

            }
            fetchData()
        }
    },[])

    console.log('me rerenderice xd')
    return (
        <ScrollView style={styles.itinerariesSectionContainer} >
            <View style={styles.itinerariesContainer}>
            
                {props.selectedCityItineraries.map(itinerary => {
                    return(
                        <View key={itinerary._id} style={styles.itineraryContainer}>
                            <View styles={styles} >
                                <View style={styles.itineraryTitleContainer} >
                                    <Text style={styles.textTwentyPx} >- {itinerary.tittle} -</Text>
                                </View>

                                <TouchableHighlight onPress={()=>props.navigation.navigate('activities', {itineraryId: itinerary._id, itineraryName: itinerary.tittle})} >
                                    <Image source={require('../assets/opcion1.jpg')} style={styles.activityImg} underlayColor="#DDDDDD" />
                                </TouchableHighlight>
                                
                                <View style={styles.priceAndLikesContainer} > 
                                    <View style={styles.priceContainer} >
                                        <Text style={styles.textTwentyPx}>Price:</Text>
                                        {new Array(itinerary.price).fill(0).map((element, index) => <Icon name="money" key={index} style={styles.dolarIcon} />)}
                                    </View>
                                    <View style={styles.likesContainer} >
                                        <AntDesign name="hearto" style={styles.heartIcon}/>
                                        <Text style={styles.textTwentyPx}>3</Text>
                                    </View>
                                </View>
                                
                                <View style={styles.durationContainer}>
                                    <Text style={styles.textTwentyPx}>Duration:</Text>     
                                    {new Array(itinerary.duration).fill(0).map((element, index) =><AntDesign name="clockcircleo" key={index} style={styles.clockIcon}/>)}
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
                    )
                })}
                    
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
        // height: '100%', 
        // backgroundColor: 'green',
        alignItems: 'center',
        width: '100%'
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
        width: '100%'
    },
    priceAndLikesContainer: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    priceContainer: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    dolarIcon: {
        fontSize: 20,
        color: '#39AF62',
        marginLeft: 5
    },  
    durationContainer:{
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    clockIcon: {
        fontSize: 22,
        color: '#35AECA',
        marginLeft: 5
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