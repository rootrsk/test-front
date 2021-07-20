import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Nav from '../../component/admin/Nav'
import Tests from './test/Tests'
import CreateTest from './test/CreateTest'
import UpdateTest from './test/UpdateTest'
// import NotificationForm from './notification/NotificationForm'
// import Notifications from './notification/Notifications'
// import CreateTest from './test/CreateTest'
// import EditTest from './test/EditTest'
// import Tests from './test/Tests'

function AdminRouter() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path='/' component={Dashboard} exact/>
                 <Route path='/admin/tests' component={Tests} />
                 <Route path='/admin/test-create' component={CreateTest} />
                 <Route path='/admin/test-edit' component={UpdateTest} />
                {/* <Route path='/admin/tests' component={Tests} />
                <Route path='/admin/test-create' component={CreateTest} />
                <Route path='/admin/test-edit' component={EditTest} />
                <Route path='/admin/notifications' component={Notifications} /> */}
            </Switch>
        </div>
    )
}

export default AdminRouter
