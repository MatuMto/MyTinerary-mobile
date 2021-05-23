import axios from 'axios'

const itinerariesActions = {
   callSingleCityItinearies: (id)=>{
      return (dispatch, getState)=>{
         fetch('https://mytinerarylorenzo.herokuapp.com/api/itineraries/' + id)
         .then(response => response.json())
         .then(data => {
            // console.log(data)
            dispatch({type: 'CALL_SELECTED_CITY_ITINERARIES', payload: data.respuesta})
         })
         .catch(error => console.log(error))
         // console.log(data)
      }
   },

   likeItinerary: (IDs) => {
      return async(dispatch, getState) => {
         const response = await axios.post('https://mytinerarylorenzo.herokuapp.com/api/likeItinerary', IDs)
         return response
      }
   },

   sendComment: (commentInfo)=>{
      return async(dispatch, getState)=>{
         console.log(commentInfo)
         // console.log('Se mandó el comentario con la info: ' + commentInfo)
         const response = await axios.post('https://mytinerarylorenzo.herokuapp.com/api/itinerary/comments', commentInfo)
         console.log('response from back is: ' + response)
         return response
      }
   },

   deleteComment: (IDs)=> {
      return async(dispatch, getState)=>{
         const response = await axios.delete('https://mytinerarylorenzo.herokuapp.com/api/itinerary/comments', {data: IDs}) 
         console.log(response.data.response)
         return response.data.response
      }
   },

   editComment: (itineraryId, commentInfo)=> {
      return async(dispatch, getState)=>{
         const response = await axios.put('https://mytinerarylorenzo.herokuapp.com/api/itinerary/comments/' + itineraryId, commentInfo )
         console.log(response.data.response)
         return response.data.response
      }
   }

}

export default itinerariesActions 