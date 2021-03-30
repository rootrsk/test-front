import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <Link className='' to='/' ><span>Testhunt</span></Link>
                
            </div>
            <div>
                <Link className='link-btn' to='/tests' >Tests</Link>
                <Link className='link-btn' to='/about-us' >About Us</Link>
                <Link className='link-btn' to='/auth' >Login</Link>
            </div>
        </div>
    )
}

export default Header
