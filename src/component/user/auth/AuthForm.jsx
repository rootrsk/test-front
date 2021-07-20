import React from 'react'
import AuthStyle from './AuthStyle'
import { useEffect, useState } from "react"
import { Oval } from "@agney/react-loading"
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Zoom } from "@material-ui/core"

export function LoginForm({open,loginHandler,error,login,loading}) {
    const [loginDetails,setLoginDetails] = useState({
        email: '',
        password:'',
        showPassword: false
    })
    const loginDetailsHandler = (value) => (e)=> setLoginDetails({...loginDetails,[value]:e.target.value})
    const handleClickShowPassword = () => setLoginDetails({...loginDetails,showPassword: !loginDetails.showPassword})
    const handleMouseDownPassword = (event) => {event.preventDefault()}
    const classes = AuthStyle();

    return (
        <Zoom in={open} style={{ transitionDelay: open ? '100ms' : '0ms' ,height:open?'auto':'0px'}}>
            <form  className = 'login-div'>
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
                    <FormControl  variant = "outlined">
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
                    <button className='signup-tg' type='button' onClick={()=>login(false)}>Create New Account</button>
                    <Button 
                        onClick={()=>loginHandler({email:loginDetails.email,password:loginDetails.password})} 
                        variant='contained'
                        className= 'p-btn'
                        style={{
                            background: '#ffffff',
                            margin:'10px 0px',
                            width:'80px',
                            height:'45px'
                        }}
                    >
                            {loading?<Oval style={{color:'#09ff84',margin:'5px'}} />:'Login'}
                    </Button>
                </div>
                {error && <p className='error-t'>{error}</p>}
            </form>
        </Zoom>
    )
}


export function  SignupForm({open,signUpHandler,error,login,loading}) {
    const [loginDetails,setLoginDetails] = useState({
        email: '',
        city:'',
        contact:'',
        username: '',
        password:'',
        full_name:'',
        showPassword: false
    })
    const validateSignup = (e) =>{
        e.preventDefault()
        signUpHandler({
            email:loginDetails.email,
            username:loginDetails.username,
            contact:loginDetails.contact,
            city:loginDetails.city,
            password:loginDetails.password,
            full_name:loginDetails.full_name
        })
    }
    const loginDetailsHandler = (value) => (e)=> setLoginDetails({...loginDetails,[value]:e.target.value})
    const handleClickShowPassword = () => setLoginDetails({...loginDetails,showPassword: !loginDetails.showPassword})
    const handleMouseDownPassword = (event) => {event.preventDefault()}

    const classes = AuthStyle();

    return (
        
        <Zoom in={open} style={{ transitionDelay: open ? '100ms' : '0ms', height: open?'auto':'0px',transition:'height 2s' }}>
            <form className = 'signup-div' onSubmit={validateSignup}>
                <div className='login-div' className={classes.root}>
                    <h1>Signup</h1>
                    <FormControl variant="outlined" className='form-control'>
                        <InputLabel htmlFor="outlined-adornment-password">Full Name</InputLabel>
                        <OutlinedInput
                            type='text'
                            value={loginDetails.full_name}
                            onChange={loginDetailsHandler('full_name')}
                            labelWidth={70}
                            required
                        />
                    </FormControl>
                    <FormControl variant="outlined" className='form-control'>
                        <InputLabel htmlFor="outlined-adornment-password">User Name</InputLabel>
                        <OutlinedInput
                            type='text'
                            value={loginDetails.username}
                            onChange={loginDetailsHandler('username')}
                            labelWidth={70}
                            required
                        />
                    </FormControl>
                    <FormControl variant="outlined" className='form-control'>
                        <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                        <OutlinedInput
                            type='email'
                            value={loginDetails.email}
                            onChange={loginDetailsHandler('email')}
                            labelWidth={70}
                            required
                        />
                    </FormControl>
                    <FormControl variant="outlined" className='form-control'>
                        <InputLabel htmlFor="outlined-adornment-password">Contact</InputLabel>
                        <OutlinedInput
                            type='number'
                            value={loginDetails.contact}
                            onChange={loginDetailsHandler('contact')}
                            labelWidth={70}
                            required
                        />
                    </FormControl>
                    {/* <FormControl variant="outlined" className='form-control'>
                        <InputLabel htmlFor="outlined-adornment-password">City</InputLabel>
                        <OutlinedInput
                            type='text'
                            value={loginDetails.city}
                            onChange={loginDetailsHandler('city')}
                            labelWidth={70}
                            required
                        />
                    </FormControl> */}

                    <FormControl  variant = "outlined">
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
                            required
                        />
                    </FormControl>
                    <button className='signup-tg' type='button' onClick={()=>login(true)}>Already Registered</button>
                    <Button 
                        
                        type='submit'
                        variant='contained'
                        style={{
                            background: '#ffffff',
                            margin:'10px 0px',
                            width:'80px',
                            height:'45px'
                        }}
                        className= 'p-btn'
                    >
                        {loading?<Oval style={{color:'#09ff84',margin:'5px'}} />:'Signup'}
                    </Button>
                    
                </div>
                {error && <p className='error-t'>{error}</p>}
            </form>   
        </Zoom>
    )
}

