import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <span>Testhunt</span>
            </div>
            <div>
                <Link className='link-btn' >Tests</Link>
                <Link className='link-btn' >About Us</Link>
                <Link className='link-btn' >Login</Link>
            </div>
        </div>
    )
}

export default Header
