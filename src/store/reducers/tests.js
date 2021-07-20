const testInitialState = {
    test:[],
    user_test:[]
}

export default (state=testInitialState,action) =>{
    // console.log(action)
    switch (action.type) {
        case 'GET_TEST':
            return state
            break;
        case 'SET_TEST':
            return {...state,test:action.payload}
            break;
        default:
            return state
            break;
    }
}