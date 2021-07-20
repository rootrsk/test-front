import { postApi } from '../../utils/userApi'
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
const cookies = new Cookies();

function Logout(props) {
    const logoutHandler  = async(operation) =>{
        const data = await postApi({url:'/user/logout',data:''})
        cookies.remove('auth_token')
        props.dispatch({
            type:'REMOVE_AUTH'
        })
        props.history.push('/')
        console.log(data)
        console.log(props)
    }

    return (
        <div style={{display:'grid',placeItems:'center'}}>
            <button className='p-btn' onClick={logoutHandler}>Logout</button>
            <button className='p-btn'>Logout from All Device</button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps) (Logout)
