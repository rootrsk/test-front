import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateTest from './test/CreateTest'
import EditTest from './test/EditTest'
import Tests from './test/Tests'

function AdminRouter() {
    return (
        <div>
            <Switch>
                <Route path='/admin/tests' component={Tests} />
                <Route path='/admin/test-create' component={CreateTest} />
                <Route path='/admin/test-edit' component={EditTest} />
            </Switch>
        </div>
    )
}

export default AdminRouter
