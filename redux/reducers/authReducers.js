const initialState = {
    userLogged: null,
 }
 
 const authReducer = (state = initialState, action)=>{
    switch (action.type){
       case 'LOG_USER':
          if(action.payload){
             console.log('Entre en el auth reducer')
             console.log(action.payload)
             localStorage.setItem('userLogged', JSON.stringify({name: action.payload.name, image: action.payload.image, userId: action.payload.userId}))
             localStorage.setItem('token', action.payload.token)
          }
          return {
             ...state, 
             userLogged: action.payload
          }
          break
 
       case 'LOGOUT_USER':
          // localStorage.removeItem('userLogged')
          localStorage.clear()
          return {
             ...state, 
             userLogged: null
          }
          break
       default:
          return state
    }
 }
 
 export default authReducer