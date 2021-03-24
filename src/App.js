import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import AdminRouter from './component/admin/AdminRouter'
import Auth from './component/user/Auth'
import UserRouter from './component/user/UserRouter'
import Homepage from './component/home/Homepage'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Homepage} exact/>
                    <Route path='/auth' component ={Auth} />
                    <Route path='/my' component={UserRouter} />
                    <Route path='/admin' component={AdminRouter} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
