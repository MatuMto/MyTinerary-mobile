import React, { useEffect, useState } from 'react'
import { Text, ScrollView, View, StyleSheet, Image, Strong, TextInput, Button, TouchableHighlight } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import activitiesActions from '../redux/actions/activitiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native'


const Activities = (props)=> {
    
    const [itineraryActivities, setItineraryActivities] = useState([])
    const [itinerarySelected, setItinerarySelected] = useState({})
    const [itineraryComments, setItineraryComments] = useState([])
    const [commentContent, setCommentContent] = useState(" ")

    useEffect(()=>{
        setItinerarySelected(props.route.params.itinerary)
        setItineraryComments(props.route.params.itinerary.comments)
        const fetch = async(id)=>{
            const response = await props.getItineraryActivities(id)
            // console.log(response)
            await setItineraryActivities(response)
        }
        fetch(props.route.params.itinerary._id)
    },[])

    console.log(commentContent)
    // console.log(itinerarySelected)

    const sendComment = async()=> {
        setCommentContent('')
        
        if (props.userLogged){
            if(commentContent !== " "){
                const response = await props.sendComment({ userId: props.userLogged.userId, comment: commentContent, itineraryId: itinerarySelected._id})
                await setItineraryComments(response.data.response)
                console.log(response.data.response)
            } else {
                Alert.alert('Oops!', 'You cant send an empty comment!', [
                    {text: 'UNDERSTOOD'}
                 ])
            }
        } else {
            Alert.alert('Oops!', 'Please sign in to leave us a comment!', [
                {text: 'UNDERSTOOD'}
             ])
        }
    }

    return(
        <ScrollView>
            <View style={styles.titleContainer} >
                <Text style={styles.fontSizeTwenty}>{itinerarySelected.tittle}</Text>
                {/* <Text>____</Text> */}
                <MaterialIcons name="horizontal-rule" size={30} color="black" />
                <Text style={styles.fontSizeTwenty} >Activities</Text>
            </View>

            {itineraryActivities && itineraryActivities.length > 0 ? itineraryActivities.map((activity, index)=>{ 
                return(
                    <View key={activity._id} style={styles.activityInfoContainer} >
                        <Text style={styles.activityTitle} >{index + 1}. {activity.tittle}</Text>
                        <Image style={styles.activityImage} source={{uri:activity.img}} />
                        <Text style={styles.activityDescription}>{activity.description}</Text>
                    </View>
                )
            }) : <Text>No hay Actividades para este itinerario</Text>}


            <View style={styles.authorPresentation} >
                <Image style={styles.authorImage} source={{uri: itinerarySelected.authorImg}} />
                <View style={styles.textPresentationContainer} >
                    <Text style={styles.presentationText1} >Hi Mateo!</Text>
                    <Text style={styles.presentationText2} >My name is  
                    <Text style={styles.authorName}> {itinerarySelected.authorName} </Text>  
                    and Im gonna acompany you through these exciting activities! Hope you choose us and come with us to discover
                    <Text> {props.route.params.selectedCity.cityName} </Text>
                      Magic.</Text>
                </View>
            </View>

            <View style={styles.commentsSectionContainer}>
                <Text>Got any doubt?</Text>
                <TextInput style={styles.sendQuestionInput} value={commentContent} onChangeText={(e)=>setCommentContent(e)} placeholder="Send us your questions!"/>
                
                <TouchableHighlight onPress={()=>sendComment()} underlayColor="#DDDDDD" style={styles.sendButtonContainer}>
                    <Text style={styles.sendText} >Send</Text>
                </TouchableHighlight>

                <Text style={styles.lasOnesText} >Last Ones</Text>
                <View style={styles.commentsContainer} >
                    <View style={styles.commentContainer}>
                        <Text style={styles.commentAuthor} >Mateo Lorenzo</Text>
                        <Text style={styles.commentContent} >Desde que vi el Aston Martin me enamoré de su auto llamado dbs porque está tremendo y algun dia me lo voy a llevar en un yate a dar vueltas por europaa!</Text>
                    </View>
                    {itineraryComments.map((comment, index) => {
                        return(
                            <View key={index} style={styles.commentContainer}>
                                <Text style={styles.commentAuthor}>{comment.userName}</Text>
                                <Text style={styles.commentContent}>{comment.comment}</Text>
                            </View>
                        )
                    })}
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
        marginTop: 90
    },
    activityTitle: {
        fontSize: 20,
        marginLeft: '2%'
    },
    activityImage: {
        width: '98%',
        height: 220,
        marginLeft: '1%'
        // resizeMode: 'contain'
    },
    activityDescription: {
        marginTop: 5,
        fontSize: 18,
        marginHorizontal: 10,
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
        borderRadius: 4,
        marginLeft: 5,
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
        // textDecorationLine: 'underline'
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
        userLogged: state.auth.userLogged,
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