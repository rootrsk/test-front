import { getApi, postApi } from '../../utils/userApi'
import store from '../store'

export async function fetchTests(filter){
    const {error,data} = await postApi({url:'/test',data:filter})
    store.dispatch({
        type:'SET_TEST',
        payload:data.tests
    })
} 