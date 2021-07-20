import { parse } from 'query-string'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from './Card'
import Footer from './Footer.jsx'
import Header from './Header'
import UpcomingFeatures from './UpcomingFeatures'
import UpcomingTests from './UpcomingTests'
import {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from '@agney/react-loading';
function Homepage(props) {
    if(props.location.search && parse(props.location.search).next){
        props.history.push(parse(props.location.search).next)
    }
    return (
        <div>
            <Header />
            <Link to='/admin/tests' >Admin</Link>
            <UpcomingTests />
            <UpcomingFeatures />
            <div className="container">
                <Card />
                <Card />
                <Card />
                <Oval width={60} style={{color:'white',margin:'10px'}} />
            </div>
            <div style={{position:'relative'}}>
            </div>
            
            <Footer />
        </div>
    )
}
const mapStateToProps = state =>state
export default connect(mapStateToProps) (Homepage)
