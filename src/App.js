import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import AdminRouter from './component/admin/AdminRouter'
import Auth from './component/user/Auth'
import UserRouter from './component/user/UserRouter'
import Homepage from './component/home/Homepage'
import Tests from './component/home/Tests'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Homepage} exact/>
                    <Route path='/auth' component ={Auth} />
                    <Route path='/my' component={UserRouter} />
                    <Route path='/admin' component={AdminRouter} />
                    <Route path='/tests' component={Tests} />
                    <Route path='/about-us' component={Tests} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
