import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className='nav-links'>
            <NavLink activeClassName='active-link' to='/' exact>Home</NavLink>
            <NavLink activeClassName='active-link'to='/admin/tests' >Tests</NavLink>
            <NavLink activeClassName='active-link'to='/admin/test-create'>Create  Tests </NavLink>
            <NavLink activeClassName='active-link'to='/admin/notifications'>Notifications </NavLink>
        </div>
    )
}

export default Nav