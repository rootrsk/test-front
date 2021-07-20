import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch} from 'react-router-dom'
import TestVerification from '../../pages/user/tests/TestVerification'
import Dashboard from './Dashboard'
import Header from './Header'
import Logout from './Logout'
import Profile from './Profile'
import Setting from './Setting'
import LiveTest from './test/LiveTest'
import Result from './test/Result'

function UserRouter(props) {
    const checkLoginHandler = () => {
        if (!props.auth.authenticated) {
            props.history.push(`/?next=${props.location.pathname}${props.location.search}`)
        }
    }
    useEffect(() => {
        checkLoginHandler()
    }, []);

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/app/dashboard' component={Dashboard} />
                <Route path='/app/profile' component={Profile} />
                <Route path='/app/live-test' component={LiveTest} />
                <Route path='/app/result' component={Result} />
                <Route path='/app/settings' component={Setting} />
                <Route path='/app/test-verification' component={TestVerification} />
                <Route path='/app/logout' component={Logout} />
            </Switch>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return state
}
export default connect(mapStateToProps) (UserRouter)
