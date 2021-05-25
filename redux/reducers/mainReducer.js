import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import authReducer from "./authReducers"

const mainReducer = combineReducers({
   cities: citiesReducer,
   itineraries: itinerariesReducer,
   auth: authReducer
})

export default mainReducer