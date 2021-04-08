import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/admin/tests' >Tests</NavLink>
            <NavLink to='/admin/test-create'>Create  Tests </NavLink>
        </div>
    )
}

export default Nav