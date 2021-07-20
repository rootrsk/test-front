import axios from 'axios'
import errorHandler from './errorHandler'
export async function getApi({url,data}) {
    try {
        const response = await axios.get(url)
        if(!response.data.success){
            const error = errorHandler({error: response.data.error,status:response.data.status})
            return {error,data:response.data.message}
        }
        return {data: response.data,error:null}
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}

export async function postApi({url,data}) {
    try {
        const response = await axios.post(url,data)
        console.log(response.data)
        if(!response.data.success){
            const error = errorHandler({error: response.data.error,status:response.data.status})
            return {error,data:response.data.message}
        }
        return {data: response.data,error:null}
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection',data:null}
    }
}

export async function patchApi({url,data}) {
    console.log(data)
    try {
        const response = await axios.patch(url,data)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}
export async function deleteApi({url,data}) {
    try {
        const response = await axios.delete(url,data)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}
