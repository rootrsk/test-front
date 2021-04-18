import axios from 'axios'
export async function adminGetApi({url}) {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}
export async function adminPostApi ({url,data}) {
    try {
        const response = await axios.post(url, data)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}
export async function adminPatchApi ({url,data}) {
    try {
        const response = await axios.patch(url,data)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}

export async function adminDeleteApi({url,data}) {
    try {
        console.log(data)
        const response = await axios.delete(`${url}/${data._id}`,data)
        return response.data
    } catch (error) {
        return {error: 'Something went wrong , try fixing your internet connection'}
    }
}