import {createStore} from 'redux'

const initialState = {
    authenticated: false,
    user: null,
    token:null,
    isLoading:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_AUTH':
            return state
            break;
        case 'SET_AUTH':
            return{
                authenticated:action.authenticated,
                user:action.user,
                token:action.token
            }
            break;
        case 'REMOVE_AUTH':
            return initialState
            break;
        case 'SET_LOADING':
            return {
                ...state,
                isLoading:true
            }
            break;
        case  'REMOVE_LOADING':
            return {
                ...state,
                isLoading: false
            }
            break;
        default:
            return state
            break;
    }
}
