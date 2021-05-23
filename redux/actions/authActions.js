import axios from 'axios'
import Swal from 'sweetalert2'
const authActions = {

   registerUser: (userToSave)=>{
      return async(dispatch, getState) => {
         const response = await axios.post('https://mytinerarylorenzo.herokuapp.com/api/user/signUp', userToSave)
         console.log(response)
         if(!response.data.success){
            console.log(response)
            response.data.error && Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: response.data.error,
             })
            return response.data.errors //asi retorno directamente al componente que está llamando a esta action 
            // return false // esto haria que se corte acá y la accion no continue hacia el reducer
         }
         dispatch({type: 'LOG_USER', payload: response.data.success ? response.data.response : null})
         // le pongo LOG_USER porque el trabajo del front es el mismo tanto en register como en log. Mandar Info y luego recibir La Info o el error.
      }
   } ,
   
   logUser: (incomingUser)=>{
      return async(dispatch, getState)=>{
         const response = await axios.post('https://mytinerarylorenzo.herokuapp.com/api/user/signIn', incomingUser)
         console.log(response.data)
         if(!response.data.success){
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: response.data.error,
             })
         }
         dispatch({type: 'LOG_USER', payload: response.data.success ? response.data.response : null})
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