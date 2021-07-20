import { combineReducers, createStore} from 'redux';
import authReducer from './reducers/auth'
import testReducer from './reducers/tests'
import loginReducer from './reducers/login'
import { composeWithDevTools } from "redux-devtools-extension";


export default createStore(
    combineReducers({
        auth: authReducer,
        tests:testReducer,
        login: loginReducer,
    }),
    composeWithDevTools()
)