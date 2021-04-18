import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch} from 'react-router-dom'
import LiveTest from './test/LiveTest'
import Result from './test/Result'

function UserRouter(props) {
    const checkLoginHandler = () =>{
        console.log(props)
        if(!props.auth.authenticated){
            // props.history.push(`${props.location}`)
            console.log(props)
            props.dispatch({
                type:'SET_OPEN'
            })
        }
    }
    useEffect(() => {
        checkLoginHandler()
    }, []);
    return (
        <div>
            <Switch>
                <Route path='/my/live-test' component={LiveTest} />
                <Route path='/my/result' component={Result} />
            </Switch>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return state
}
export default connect(mapStateToProps) (UserRouter)
