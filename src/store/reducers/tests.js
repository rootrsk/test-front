const testInitialState = {
    test:[],
    user_test:[]
}

export default (state=testInitialState,action) =>{
    switch (action.type) {
        case 'GET_TEST':
            return state
            break;
    
        default:
            return state
            break;
    }
}