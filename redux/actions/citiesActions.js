import axios from 'axios'

const citiesActions = {
   uploadCities: ()=>{
      return (dispatch, getState)=>{
         fetch('https://mytinerarylorenzo.herokuapp.com/api/cities')
         .then(response => response.json())
         .then(data => dispatch({type: 'CARGAR_CITIES', payload: data.respuesta}))
         .catch(error => console.log(error))
      }
   },

   citiesFilter: (elementoACapturar)=>{
      return(dispatch, getState) =>{
         dispatch({
            type: 'FILTER_FUNCTION',
            payload: elementoACapturar.trim()
         })  
      }
   },

   callSingleCity: (id)=>{
      return async(dispatch, getState)=>{
         const response = await axios.get('https://mytinerarylorenzo.herokuapp.com/api/city/'+ id)
         // console.log(response.data.respuesta)
         return response.data.respuesta
         // dispatch({type: 'GET_SINGLE_CITY', payload: response })
      }
   }


}

export default citiesActions 