import axios from 'axios'
import { Alert } from 'react-native'
// import Swal from 'sweetalert2'
const authActions = {

   registerUser: (userToSave)=>{
      return async(dispatch, getState) => {
         const response = await axios.post('https://mytinerarylorenzo.herokuapp.com/api/user/signUp', userToSave)
         console.log(response)
         if(!response.data.success){
            console.log(response.data.error)
            // Alert.alert('Oops!', response.data.error, [
            //    {text: 'UNDERSTOOD'}
            // ])
            dispatch({type: 'LOG_USER', payload: null})

            // return response.data.errors //asi retorno directamente al componente que está llamando a esta action 
         } else {
            console.log(response.data.response)
            Alert.alert('Hi', 'Welcome dear ' + response.data.response.name + '!', [
               {text: 'UNDERSTOOD'}
            ])
            dispatch({type: 'LOG_USER', payload: response.data.response})
         }
         return(response.data.success)
      }
   } ,
   
   logUser: (incomingUser)=>{
      return async(dispatch, getState)=>{
         const response = await axios.post('https://mytinerarylorenzo.herokuapp.com/api/user/signIn', incomingUser)
         console.log(response.data)
         if(!response.data.success){
            Alert.alert('Oops!', response.data.error, [
               {text: 'UNDERSTOOD'}
            ])
            dispatch({type: 'LOG_USER', payload: null})

         }else {
            Alert.alert('Welcome!', 'Happy to have you back ' + response.data.response.name + '!', [
               {text: 'UNDERSTOOD'}
            ])
            dispatch({type: 'LOG_USER', payload: response.data.response})
         }
         console.log(response.data.response)
         // dispatch({type: 'LOG_USER', payload: response.data.success ? response.data.response : null})
         return(response.data.success)

         // le pongo LOG_USER porque el trabajo del front es el mismo tanto en register como en log. Mandar Info y luego recibir La Info o el error.
      }
   },

   logOutUser: ()=>{
      return (dispatch, getState) => {
         dispatch({type: 'LOGOUT_USER'})
      }
   },
   
   forcedLoginByLS: (usuarioLS)=>{
      return async(dispatch, getState)=>{
         try {
            const response = await axios.get('https://mytinerarylorenzo.herokuapp.com/api/user/loginLS', {
               headers:{
                  'Authorization': 'Bearer '+usuarioLS.token
               }
            })
            dispatch({type: 'LOG_USER', payload: {
               ...response.data.response,
               token: usuarioLS.token
            }})
         } catch(err){
            // console.log('caí en el catch')
            // if(err.response.status === 401){
            //    alert('Invalid token -.-')
            // }
         }
      }
   }
}

export default authActions