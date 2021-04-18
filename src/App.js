import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import {  useHistory, useLocation } from 'react-router-dom'
import { BrowserRouter, Redirect, Route, Router, Switch} from 'react-router-dom'

import AdminRouter from './component/admin/AdminRouter'
import Auth from './component/user/Auth'
import UserRouter from './component/user/UserRouters'
import Homepage from './component/home/Homepage'
import Tests from './component/home/Tests'
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import axios from 'axios'
import Demo from './Demo'
import { parse } from 'query-string'

function App(props) {
    console.log(props)
    const history = useHistory()
    console.log(history)
    const initLogin = async(token) =>{
        props.dispatch({
            type:'SET_LOADING'
        })
        const response = await axios({
            url:'/user/me',
            method:'get'
        })
        console.log(response)
        props.dispatch({
            type: 'SET_LOADING'
        })
        console.log(response)
        if(response.data.status==='success'){
            props.dispatch({
                type:'SET_AUTH',
                authenticated: true,
                token: token,
                user:response.data.user
            })
            // console.log(history,location)
            // if(history.location.search){
            //     history.push(parse(history.location.search).next)
            // }
        }
    }
    useEffect(()=>{
        const cookies = new Cookies();
        const token = cookies.get('auth_token');
        if(token){
            initLogin(token)
            props.dispatch({
                type:'SET_CLOSE'
            })
        }
    },[])
    return (
        <div>
            <BrowserRouter>
                <div>
                    {/* <Auth /> */}
                    {props.login.open && <Auth />}
                    <Switch>
                        <Route path='/' component={Homepage} exact/>
                        <Route path='/auth' component ={Auth} />
                        <Route path='/app' component={UserRouter} />
                        <Route path='/admin' component={AdminRouter} />
                        <Route path='/tests' component={Tests} />
                        <Route path='/about-us' component={Tests} />
                        <Route path='/demo' component={Demo} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}
const mapStateToProps = (store,onwProps) =>{
    console.log(onwProps)
    return store
}

export default connect(mapStateToProps) (App)
