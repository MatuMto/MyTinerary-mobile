import React, { useEffect, useState } from 'react'
import { Text, ScrollView, View, StyleSheet, Image, Strong, TextInput, Button, TouchableHighlight } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import activitiesActions from '../redux/actions/activitiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'

const Activities = (props)=> {
    
    const [itineraryActivities, setItineraryActivities] = useState([])
    
    useEffect(()=>{
        console.log(props.route.params.itineraryId)
        const itineraryId = props.route.params.itineraryId
        const fetch = async(id)=>{
            const response = await props.getItineraryActivities(id)
            console.log(response)
            await setItineraryActivities(response)
        }
        fetch(itineraryId)

    },[])
    return(
        <ScrollView>
            <View style={styles.titleContainer} >
                <Text style={styles.fontSizeTwenty}>{props.route.params.itineraryName}</Text>
                {/* <Text>____</Text> */}
                <MaterialIcons name="horizontal-rule" size={30} color="black" />
                <Text style={styles.fontSizeTwenty} >Activities</Text>
            </View>

            {itineraryActivities.length > 0 ? itineraryActivities.map((activity, index)=>{ 
                return(
                    <View key={activity._id} style={styles.activityInfoContainer} >
                        <Text>{index + 1} {activity.tittle}</Text>
                        <Image style={styles.activityImage} source={{uri:activity.img}} />
                        <Text>{activity.description}</Text>
                    </View>
                )
            }) : <Text>No hay Actividades para este itinerario</Text>}

            {/* <View style={styles.activityInfoContainer} >
                <Text>1. Activity Name</Text>
                <Image style={styles.activityImage} source={{uri:'https://images.unsplash.com/photo-1528988719300-046ff7faf8cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'}} />
                <Text>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto.</Text>
            </View> */}

            

            <View style={styles.authorPresentation} >
                <Image style={styles.authorImage} source={{uri: 'https://global360contractor.com/wp-content/uploads/2021/03/perfil-resilencia.jpg'}} />
                <View style={styles.textPresentationContainer} >
                    <Text style={styles.presentationText1} >Hi Mateo!</Text>
                    <Text style={styles.presentationText2} >My name is 
                    <Text style={styles.authorName}> Kelly Anders </Text>  
                    and Im gonna acompany you through these exciting activities! Hope you choose us and come with us to discover Berna Magic.</Text>
                </View>
            </View>

            <View style={styles.commentsSectionContainer} >
                <Text>Got any doubt?</Text>
                <TextInput style={styles.sendQuestionInput} placeholder="Send us your questions!"/>
                <TouchableHighlight onPress={()=>console.log('apretaste el send')} underlayColor="#DDDDDD" style={styles.sendButtonContainer}>
                    <Text style={styles.sendText} >Send</Text>
                </TouchableHighlight>

                <Text style={styles.lasOnesText} >Last Ones</Text>
                <View style={styles.commentsContainer} >
                    <View style={styles.commentContainer}>
                        <Text style={styles.commentAuthor} >Mateo Lorenzo</Text>
                        <Text style={styles.commentContent} >Desde que vi el Aston Martin me enamoré de su auto llamado dbs porque está tremendo y algun dia me lo voy a llevar en un yate a dar vueltas por europaa!</Text>
                    </View>
                    <View style={styles.commentContainer}>
                        <Text style={styles.commentAuthor} >Mateo Lorenzo</Text>
                        <Text style={styles.commentContent} >Desde que vi el Aston Martin me enamoré de su auto llamado dbs porque está tremendo y algun dia me lo voy a llevar en un yate a dar vueltas por europaa!</Text>
                    </View>
                </View>
            </View>

            <Footer/>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        // backgroundColor: 'green',
        alignItems: 'center',
        marginTop: 20
    },
    fontSizeTwenty: {
        fontSize: 20
    },
    activityInfoContainer: {
        marginTop: 40
    },
    activityImage: {
        width: '100%',
        height: 220,
        // resizeMode: 'contain'
    },
    authorPresentation: {
        // backgroundColor: 'green',
        marginTop: 100,
        marginBottom: 50,
        flexDirection: 'row'
    },
    authorImage:{
        width: '40%',
        height: '100%',
        // marginLeft: '4%',
    },
    textPresentationContainer: {
        // backgroundColor: 'yellow',
        width: '50%',
        marginLeft: '5%',
        // justifyContent: 'center'
    },    presentationText1: {
        fontSize: 18,
        marginBottom: 2
        // fontWeight: 'bold'
    },
    presentationText2: {
        fontSize: 18
    },
    authorName: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    commentsSectionContainer:{
        width: '90%',
        marginLeft: '5%',
        marginBottom: 50
        // backgroundColor: 'grey'
    },
    sendQuestionInput: {
        borderWidth: .5,
        padding: 10,
        borderColor: 'grey',
        borderRadius: 5,
        marginBottom: 10
    },
    sendButtonContainer: {
        backgroundColor: 'rgb(10,131,250)',
        width: '100%',
        // marginLeft: '5%',
        alignItems: 'center',
        borderRadius: 4,
        padding: 5,
        marginBottom: 20
    },
    sendText: {
        color: 'white',
        fontSize: 24
    },
    lasOnesText: {
        marginTop: 20,
        fontSize: 17
    },
    commentsContainer: {
        width: '100%',
        // marginLeft: '5%'
        // height: 400,
        marginTop: 10
        // backgroundColor: 'grey',
    },
    commentContainer: {
        marginBottom: 20,
        // backgroundColor: 'green'
    },
    commentAuthor: {
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    commentContent: {
        marginLeft: 30,
        fontSize: 16
    },
})

const mapStateToProps = (state)=>{
    return{
        cities: state.itineraries
    }
}

const mapDispatchToProps = {
    getItineraryActivities: activitiesActions.getItineraryActivities,
    likeItinerary: itinerariesActions.likeItinerary,
    sendComment: itinerariesActions.sendComment,
    deleteComment: itinerariesActions.deleteComment,
    editComment: itinerariesActions.editComment
}


export default connect(mapStateToProps, mapDispatchToProps)(Activities)