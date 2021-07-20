import { getApi,postApi } from '../../utils/api'
import store from '../store'

export async function fetchLogin(){
    
    store.dispatch({
        type:'SET_LOADING'
    })
    const response = await getApi({url:'/user/me'})
    store.dispatch({
        type: 'REMOVE_LOADING'
    })
    const currentDate = new Date()
    console.log(currentDate.getDate())
    const activityData = await new Array(currentDate.getDate()+1).fill(0)
    const monthDetails = await new Array(currentDate.getDate()+1).fill(0).map((data,index)=>index)
    await response.charts.activity.map((data,index)=>{   
        const day = new Date(data).getDate()
        if(day >= activityData.length) return
        activityData[day] = (activityData[day]+1)
        return
    })
    requestUserAuth({
        authenticated: true,                                                          
        user:{
            ...response.user,
            charts:{
                activity:activityData,
                marks:response.charts.marks,
                accuracy: response.charts.accuracy
            }
        },
        
    })
}


export async function requestUserAuth(payload){
    console.log(payload)
    store.dispatch({
        type:'SET_AUTH',
        payload:{
            authenticated: true,
            user:payload.user
        }
    })
    store.dispatch({
        type: 'SET_CLOSE'
    })
}  

