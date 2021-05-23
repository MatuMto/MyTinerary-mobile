import {createStore, combineReducers} from 'redux'
import citiesReducer from './redux/reducers/citiesReducer'
import itinerariesReducer from './redux/reducers/itinerariesReducer'
import authReducer from './redux/reducers/authReducers'

const rootReducer = combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    auth: authReducer
})

const configureStore = () => {
    return createStore(rootReducer);
}

// export default configureStore;

