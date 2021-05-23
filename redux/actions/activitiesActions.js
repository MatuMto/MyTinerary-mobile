import axios from 'axios'

const activitiesActions = {
   getItineraryActivities: (id) => {
      return async(dispatch, getState) => {
         const response = await axios.get('https://mytinerarylorenzo.herokuapp.com/api/activities/' + id)
         return response.data.response
      }
   }
}

export default activitiesActions 