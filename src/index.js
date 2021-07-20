import axios from 'axios'
import React, { StrictMode } from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './css/main.css'
import Cookies from 'universal-cookie';
import { Provider } from 'react-redux'
import store from './store/store'

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://localhost:3001/api'
    // axios.defaults.baseURL = 'https://rootrsk-test-api.herokuapp.com';
    
} else{
    axios.defaults.baseURL = 'https://rootrsk-test-api.herokuapp.com';
}

axios.interceptors.request.use(function (config) {
    const cookies = new Cookies();
    const token = cookies.get('auth_token')
    config.headers.Authorization = token;
    return config;
});

ReactDom.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>,
    document.getElementById('root')
)