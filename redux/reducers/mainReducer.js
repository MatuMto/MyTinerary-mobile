import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itineraryReducer";
import authReducer from "./authReducer"

const mainReducer = combineReducers({
   cities: citiesReducer,
   itineraries: itinerariesReducer,
   auth: authReducer
})

export default mainReducer