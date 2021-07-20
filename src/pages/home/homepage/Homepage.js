import { Grid } from '@material-ui/core'
import { parse } from 'query-string'
import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from '../../../component/home/Card'
import Footer from '../../../component/home/Footer.jsx'
import Header from '../../../component/home/Header'
import UpcomingFeatures from '../../../component/home/UpcomingFeatures'
import UpcomingTests from '../../../component/home/UpcomingTests'

function Homepage(props) {
    useEffect(()=>{
        if (props.location.search && (parse(props.location.search).next) && props.auth.authenticated) {
            props.history.push(parse(props.location.search).next)
        }
    },[props.auth])
    return (
        <div>
            <Header />
            <Link to='/admin/tests' >Admin</Link>
            <UpcomingTests />
            <UpcomingFeatures />
            <Grid container spacing={2} >
                <Card />
                <Card />
                <Card />
            </Grid>
            <div style={{position:'relative'}}>
            </div>
            <Footer />
        </div>
    )
}
const mapStateToProps = state =>state
export default connect(mapStateToProps) (Homepage)
