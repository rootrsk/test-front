const initialState = {
    open:false
}
export default (state=initialState,action) =>{
    switch (action.type) {
        case 'SET_OPEN':
            return {open:true}
            break;
        case 'SET_CLOSE':
            return {
                open: false
            }
            break;
        case 'GET_OPEN':
            return state
        default:
            return state
            break;
    }
}