import React from 'react'
import { Route, Switch} from 'react-router-dom'
import LiveTest from './test/LiveTest'
import Result from './test/Result'

function UserRouter() {
    return (
        <div>
            <Switch>
                <Route path='/my/live-test' component={LiveTest} />
                <Route path='/my/result' component={Result} />
                {/* <Route path='/admin/test-create' component={CreateTest} />
                <Route path='/admin/test-edit' component={EditTest} /> */}
            </Switch>
        </div>
    )
}

export default UserRouter
