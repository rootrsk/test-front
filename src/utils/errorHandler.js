export default function errorHandler({error,status}) {
    if (error.includes('Email or  password is incorrect')){
        return 'Email or password is incorrect'
    }
    console.log(error)
    return error
}
