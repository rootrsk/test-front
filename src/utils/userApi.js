import axios from "axios"

export async function getApi({url,data}) {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}

export async function postApi({url,data}) {
    try {
        const response = await axios.post(url)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}

export async function patchApi({url,data}) {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}
export async function deleteApi({url,data}) {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}
