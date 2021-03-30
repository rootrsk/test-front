import { Avatar, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField, withStyles } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import '../../css/auth.css'
import Cookies from 'universal-cookie';
import { Visibility, VisibilityOff } from "@material-ui/icons";
function Auth() {
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [contact,setContact] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)

    const [loginDetails,setLoginDetails] = useState({
        email: '',
        contact:'',
        username: '',
        password:'',
        showPassword: false
    })
    const loginDetailsHandler = (value) => (e)=> setLoginDetails({...loginDetails,[value]:e.target.value})
    

    const handleClickShowPassword = () => {
        setLoginDetails({...loginDetails,showPassword: !loginDetails.showPassword});};
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    console.log(loginDetails)
    const loginHandler = async() =>{
        setLoading(true)
        setError('')
        const response = await axios({
            url: '/login',
            method:'POST',
            data: loginDetails
        })
        setLoading(false)
        if(response.data.message==='success'){
            console.log(response.data.token)
            const cookies = new Cookies()
            cookies.set('auth_token', response.data.token, {path: '/'})
        } else{
            setError(response.data.error)
        }
    }
    const signUpHandler = async() =>{
        setLoading(true)
        setError('')
        const response = await axios({
            url:'/signup',
            method:'POST',
            data: loginDetails
        })
        setLoading(false)
        if(response.data.status==='success'){
            const cookies = new Cookies()
            cookies.set('auth_token', response.data.token, {path:'/'})
        } else{
            setError(response.data.error)
        }
    }
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& input + fieldset': {
                borderColor: 'green'
            },
            '& input:invalid:focus + fieldset': {
                borderColor:'red'
            },
            '& input:valid:focus + fieldset': {
                borderColor: 'green'
            },
            '& .form-control': {
                margin:'20px 0px',
                width:'100%'
            },
            '& .MuiFormControl-root':{
                width:'100%'
            },
            'button ': {
                marginTop: '10px'
            }
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
        },
        formControl:{
            marginTop:'10px'
        },
        btn:{
            padding: '10px 20px',
            marignTop:'10px 0px'
        }
        
    }));
    const classes = useStyles();
    useEffect(()=>{},[])
    return (
        <div className='auth-page'>
            <div className="avatar">
                <Avatar src='https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg' />
            </div>
            <form className='login-div'>
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
                    <Button 
                        onClick={loginHandler} 
                        variant='contained'
                        style={{
                            padding:'10px 20px',
                            background: '#ffffff',
                            margin:'10px 0px',
                            float:'right'
                        }}
                         className= 'p-btn'
                        >
                            {loading?<CircularProgress />:'Login'}
                    </Button>
                </div>
                {error && <p>{error}</p>}
                
            </form>

             <form>
                <div className='singup-div'>
                    <h1>Sign Up</h1>
                    <TextField
                        label="User Name"
                        rowsMax={4}
                        value={username}
                        variant='outlined'
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        rowsMax={4}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <TextField
                        label="Contact"
                        rowsMax={4}
                        value={contact}
                        onChange={(e)=>setContact(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        rowsMax={4}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    {error && <p>{error}</p>}
                    <Button onClick={signUpHandler} variant='contained'> {loading? <CircularProgress />: 'Signup'} </Button>
                </div>
                
            </form>
        </div>
    )
}

export default Auth
