import { Avatar} from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import './auth.css'
import Cookies from 'universal-cookie';
import { Close } from "@material-ui/icons";
import AuthStyle from '../../../component/user/auth/AuthStyle'
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setLoginForm,setLoginLoading } from "../../../store/actions/login";
import { requestUserAuth,requestLogin } from "../../../store/actions/auth";
import { postApi } from "../../../utils/userApi";
import { LoginForm, SignupForm } from "../../../component/user/auth/AuthForm";
const {parse} = require('query-string');

function Auth(props) {
    const [loginError,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const [login,setLogin] = useState(true)
    const [signupError,setSignupError] = useState('')
    
    const loginHandler = async ({email,password}) => {
        setError('')
        setLoading(true)
        setLoginLoading(true)
        const {error,data} = await postApi({url:'/user/login',data:{email,password}})
        setLoading(false)
        setLoginLoading(false)
        console.log(error)
        if(error){
            setError(error)
            return
        }
        requestUserAuth(data)
        const cookies = new Cookies()
        cookies.set('auth_token', data.token, {path: '/'})
    }
    // Function to handle signup
    const signUpHandler = async(signupData) =>{
        setSignupError('')
        setLoading(true)
        setLoginLoading(true)
        const {error,data} = await postApi({url:'/user/signup',data:signupData})
        console.log(error)
        setLoading(false)
        setLoginLoading(false)
        if(error){
            setSignupError(error)
            return
        }
        requestUserAuth(data)
        const cookies = new Cookies()
        cookies.set('auth_token', data.token, {path: '/'})
    }
    const classes = AuthStyle();
    useEffect(()=>{
    },[])

    return (
        <div className='auth-page'>
            <div className='auth-div' >
                <button className='cancle-cross' onClick={()=>setLoginForm(false)}><Close /></button>
                <div className="avatar">
                    <Avatar src='https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg' />
                </div>
                <LoginForm open={login} loginHandler={loginHandler} login={setLogin} error={loginError} loading={loading} />
                <SignupForm open={!login} signUpHandler={signUpHandler} login={setLogin} error={signupError} loading={loading} />
            </div>
        </div>
    )
}
const mapStateToProsp = (state) =>{
    return state
}
export default connect(mapStateToProsp) (Auth)
