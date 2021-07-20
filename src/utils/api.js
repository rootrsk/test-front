import axios from 'axios'
export async function getApi({url}) {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}
export async function postApi ({url,data}) {
    try {
        const response = await axios.post(url, data)
        console.log(response)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}
export async function patchApi ({url,data}) {
    try {
        const response = await axios.patch(url,data)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}

export async function deleteApi({url,data}) {
    try {
        console.log(data)
        const response = await axios.delete(`${url}/${data._id}`,data)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}

export async function getAuthApi({url}) {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}
export async function postAuthApi ({url,data}) {
    try {
        const response = await axios.post(url, data)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}
export async function patchAuthApi ({url,data}) {
    try {
        const response = await axios.patch(url,data)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}

export async function deleteAuthApi({url,data}) {
    try {
        console.log(data)
        const response = await axios.delete(`${url}/${data._id}`,data)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}