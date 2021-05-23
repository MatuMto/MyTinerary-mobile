const initialState = {
    selectedCityItineraries: [],
 }
 
 const itinerariesReducer = (state = initialState, action) =>{
    switch (action.type){
       case 'CALL_SELECTED_CITY_ITINERARIES':
          return {
             ...state,
             selectedCityItineraries: action.payload
          }
       break
 
       default:
          return state
    }
 }
 
 export default itinerariesReducer