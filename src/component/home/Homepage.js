import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import Header from './Header'

function Homepage() {
    return (
        <div>
            <Header />
            <Link to='/admin/tests' >Admin</Link>
            <div className="container">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Homepage
