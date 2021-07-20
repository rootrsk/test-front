import { getApi } from '../../utils/api'
import store from '../store'

export async function setLoginForm(status){
    if(status){
        store.dispatch({
            type:'SET_OPEN'
        })
    }else{
        store.dispatch({
            type: 'SET_CLOSE'
        })
    }
} 
export async function setLoginLoading(status){
    if(status){
        store.dispatch({
            type:'SET_LOADING'
        })
    }else{
        store.dispatch({
            type: 'REMOVE_LOADING'
        })
    }
} 
