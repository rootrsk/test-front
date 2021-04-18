import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import Footer from './Footer.jsx'
import Header from './Header'
import HomeSlider from './HomeSlider'

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
            <div style={{position:'relative'}}>
                {/* <HomeSlider /> */}
            </div>
            
            <Footer />
        </div>
    )
}

export default Homepage
