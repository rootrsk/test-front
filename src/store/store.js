import { act } from 'react-dom/test-utils';
import { combineReducers, createStore } from 'redux';

const userInitialState = {
    inAuthenticated: false,
    type:'Guest'
}


const trainReducer = (state=[],action) =>{
    switch (action.type) {
        case 'SET_TRAINS':
            return action.trains
            break;
        case 'GET_TRAINS':
            return action.trains
            break;
        default:
            return action
            break;
    }
}
const filterInitialState = {

}
const filterTrainsReducer = (state=[],action)=>{
    switch (action.type) {
        case 'SET_STATION_FILTER':
            
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        trains: trainReducer,
        filter: filterTrainsReducer
    })
)

export default store