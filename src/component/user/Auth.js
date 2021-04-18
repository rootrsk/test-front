import { Avatar, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField, withStyles, Zoom } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import '../../css/auth.css'
import Cookies from 'universal-cookie';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import AuthStyle from './AuthStyle'
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
const {parse} = require('query-string');

function Auth(props) {
    const location = useLocation()
    const history = useHistory()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const [login,setLogin] = useState(true)
    
    const [loginDetails,setLoginDetails] = useState({
        email: '',
        city:'',
        contact:'',
        username: '',
        password:'',
        showPassword: false
    })

    const loginDetailsHandler = (value) => (e)=> setLoginDetails({...loginDetails,[value]:e.target.value})
    const handleClickShowPassword = () => setLoginDetails({...loginDetails,showPassword: !loginDetails.showPassword})

    const handleMouseDownPassword = (event) => {event.preventDefault();};
    console.log(loginDetails)
    // Function to handle login
    const loginHandler = async() =>{
        setLoading(true)
        props.dispatch({
            type: 'SET_LOADING'
        })
        setError('')
        const response = await axios({
            url: '/login',
            method:'POST',
            data: loginDetails
        })
        props.dispatch({
            type: 'REMOVE_LOADING'
        })
        setLoading(false)
        if(response.data.message==='success'){
            const cookies = new Cookies()
            cookies.set('auth_token', response.data.token, {path: '/'})
            props.dispatch({
                type:'SET_AUTH',
                token: response.data.token,
                user:response.data.user,
                authenticated:true,
            })
            if(history.location.search){
                history.push(parse(history.location.search).next)
            }
            props.dispatch({
                type:'SET_CLOSE'
            })
        } else{
            setError(response.data.error)
        }
    }
    // Function to handle signup
    const signUpHandler = async() =>{
        props.dispatch({
            type: 'SET_LOADING'
        })
        setLoading(true)
        setError('')
        const response = await axios({
            url:'/signup',
            method:'POST',
            data: loginDetails
        })
        console.log(response)
        setLoading(false)
        props.dispatch({
            type: 'REMOVE_LOADING'
        })
        if(response.data.status==='success'){
            const cookies = new Cookies()
            cookies.set('auth_token', response.data.token, {path:'/'})
            props.dispatch({
                type: 'SET_AUTH',
                token: response.data.token,
                user: response.data.user,
                authenticated: true,
            })
            props.dispatch({
                type: 'SET_CLOSE'
            })
            if (history.location.search) {
                history.push(parse(history.location.search).next)
            }
            
            
        } else{
            setError(response.data.error)
        }
    }
    const classes = AuthStyle();
    useEffect(()=>{
    },[])

    return (
        <div className='auth-page' >
            <div className="avatar">
                <Avatar src='https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg' />
            </div>
            <Zoom in={login} style={{ transitionDelay: login ? '100ms' : '0ms' ,height:login?'auto':'0px'}}>
                <form form form className = 'login-div'>
                    <div className='login-div' className={classes.root}>
                        <h1>Login</h1>
                        <FormControl variant="outlined" className='form-control'>
                            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                            <OutlinedInput
                                type='email'
                                value={loginDetails.email} 
                                onChange={loginDetailsHandler('email')}
                                labelWidth={70}
                            />
                        </FormControl>
                        <FormControl FormControl variant = "outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                type={loginDetails.showPassword ? 'text' : 'password'}
                                value={loginDetails.password}
                                onChange={loginDetailsHandler('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {loginDetails.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        <button className='signup-tg' type='button' onClick={()=>setLogin(false)}>Create New Account</button>
                        <Button 
                            onClick={loginHandler} 
                            variant='contained'
                            style={{
                                padding:'10px 20px',
                                background: '#ffffff',
                                margin:'10px 0px',
                                float:'right'
                            }}
                            className= 'p-btn'>
                                {loading?<CircularProgress />:'Login'}
                        </Button>
                    </div>
                    {error && <p className='error-t'>{error}</p>}
                </form>
            </Zoom>
            
                <Zoom in={!login} style={{ transitionDelay: !login ? '100ms' : '0ms', height: !login?'auto':'0px',transition:'height 2s' }}>
                    <form form className = 'signup-div'>
                        <div className='login-div' className={classes.root}>
                            <h1>Signup</h1>
                            <FormControl variant="outlined" className='form-control'>
                                <InputLabel htmlFor="outlined-adornment-password">User Name</InputLabel>
                                <OutlinedInput
                                    type='text'
                                    value={loginDetails.username}
                                    onChange={loginDetailsHandler('username')}
                                    labelWidth={70}
                                />
                            </FormControl>
                            <FormControl variant="outlined" className='form-control'>
                                <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                                <OutlinedInput
                                    type='email'
                                    value={loginDetails.email}
                                    onChange={loginDetailsHandler('email')}
                                    labelWidth={70}
                                />
                            </FormControl>
                            <FormControl variant="outlined" className='form-control'>
                                <InputLabel htmlFor="outlined-adornment-password">Contact</InputLabel>
                                <OutlinedInput
                                    type='number'
                                    value={loginDetails.contact}
                                    onChange={loginDetailsHandler('contact')}
                                    labelWidth={70}
                                />
                            </FormControl>
                            <FormControl variant="outlined" className='form-control'>
                                <InputLabel htmlFor="outlined-adornment-password">City</InputLabel>
                                <OutlinedInput
                                    type='text'
                                    value={loginDetails.city}
                                    onChange={loginDetailsHandler('city')}
                                    labelWidth={70}
                                />
                            </FormControl>

                            <FormControl FormControl variant = "outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    type={loginDetails.showPassword ? 'text' : 'password'}
                                    value={loginDetails.password}
                                    onChange={loginDetailsHandler('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {loginDetails.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            <button className='signup-tg' type='button' onClick={()=>setLogin(true)}>Already Registered</button>
                            <Button 
                                onClick={signUpHandler} 
                                variant='contained'
                                style={{
                                    padding:'10px 20px',
                                    background: '#ffffff',
                                    margin:'10px 0px',
                                    float:'right'
                                }}
                                className= 'p-btn'
                                >
                                    {loading?<CircularProgress />:'Signup'}
                            </Button>
                        </div>
                    </form>   
                </Zoom>
        </div>
    )
}
const mapStateToProsp = (state) =>{
    return state
}
export default connect(mapStateToProsp) (Auth)
