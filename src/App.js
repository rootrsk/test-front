import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import {  useHistory, useLocation } from 'react-router-dom'
import { BrowserRouter, Redirect, Route, Router, Switch} from 'react-router-dom'
// import AdminRouter from './component/admin/AdminRouter'
// import Auth from './component/user/Auth'
import UserRouter from './component/user/UserRouters'
// import Homepage from './component/home/Homepage'
// import Tests from './component/home/Tests'
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import Demo from './Demo'
import TestVerification from './component/home/TestVerification'
import { fetchLogin, requestUserAuth } from './store/actions/auth'
import Homepage from './pages/home/homepage/Homepage'
import Auth from './pages/user/auth/Auth'
import Tests from './pages/home/tests/Tests'
import AdminRouter from './pages/admin/AdminRouter'

function App(props) {
    useEffect(()=>{
        const cookies = new Cookies();
        const token = cookies.get('auth_token');
        if(token){
            fetchLogin()
        }
    },[])
    return (
        <div>
            <BrowserRouter>
                <div>
                    {props.login.open && <Auth />}
                    <Switch>
                        <Route path='/' component={Homepage} exact/>
                        <Route path='/auth' component ={Auth} />
                        <Route path='/app' component={UserRouter} />
                        <Route path='/admin' component={AdminRouter} />
                        <Route path='/tests' component={Tests} />
                        <Route path='/about-us' component={Tests} />
                        <Route path='/demo' component={Demo} />
                        <Route path='/test-verification' component={TestVerification} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}
const mapStateToProps = (store,onwProps) =>{
    return store
}

export default connect(mapStateToProps) (App)
