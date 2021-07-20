import { Avatar, Button, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'
import white_spinner from '../../assets/whiteSpinner1.svg'
import { AssignmentTurnedIn, Dashboard, ExitToApp, ExpandMore, InboxRounded, Person, Settings } from '@material-ui/icons'
function Header(props) {
    // console.log(props)
    const [dropdown,setDropDown] = useState(false)
    const loginButtonHandler = () =>{
        if(props.login.open){
            return props.dispatch({
                type: 'SET_CLOSE'
            })
        }
        props.dispatch({
            type:'SET_OPEN'
        })
    }
    const logOutHandler = async() =>{
        props.dispatch({
            type:'REMOVE_AUTH'
        })
    }
    return (
        <div className='header'>
            <div className="logo">
                <Link className='' to='/' ><span>Testhunt</span></Link>
            </div>
            <div className='link-container' style={{placeItems:'center'}}>
                <Link className='link-btn' to='/tests' >Tests</Link>
                <Link className='link-btn' to='/about-us' >About Us</Link>
                {
                    props.auth.isLoading ? 
                        <button className="link-btn"><img src={white_spinner}  height='20px' alt="spinner"/> </button>:
                        props.auth.authenticated ? 
                        // <button onClick={logOutHandler} className='link-btn'>Logout</button>:
                        <ProfileIcon toggle={()=>setDropDown(!dropdown)} open={dropdown}/>:
                        <button onClick={loginButtonHandler} className='link-btn' >Login</button>
                }
            </div>
        </div>
    )
}

const ProfileIcon = ({open,toggle}) =>{
    // console.log(open)
    return(
        <div style={style.picContainer}>      
            <IconButton style={style.IconButton} onClick={toggle}>
                <Avatar 
                    src={'https://data.whicdn.com/images/322027365/original.jpg?t=1541703413'}
                    
                />
                
                <div style={{...style.ClosedropDownContainer},open?style.OpendropDownContainer:style.ClosedropDownContainer}>
                    <div style={{background:'white',position:'relative'}}>
                        <div style={style.traingle} className='traingle'></div>
                    </div>
                    
                    <List  style={style.list} className='list'>
                        <ListItem style={style.listItem} className='dropdown-list'>
                            <Link to='/app/dashboard' style={style.link}>
                                <ListItemIcon>
                                    <Dashboard style={style.icon} />
                                </ListItemIcon>
                                <ListItemText primary='Dashboard' />
                            </Link>
                        </ListItem>
                        <ListItem style={style.listItem} className='dropdown-list'>
                            <Link to='/app/tests' style={style.link}>
                                <ListItemIcon>
                                    <AssignmentTurnedIn style={style.icon} />
                                </ListItemIcon>
                                <ListItemText primary='My Tests' />
                            </Link>
                        </ListItem>
                        <ListItem style={style.listItem} className='dropdown-list'>
                            <Link to='/app/profile' style={style.link}>
                                <ListItemIcon>
                                    <Person style={style.icon} />
                                </ListItemIcon>
                                <ListItemText primary='Profile' />
                            </Link>
                        </ListItem>
                        <ListItem style={style.listItem} className='dropdown-list'>
                            <Link to='/app/settings' style={style.link}>
                                <ListItemIcon>
                                    <Settings style={style.icon} />
                                </ListItemIcon>
                                <ListItemText primary='Settings' />
                            </Link>
                        </ListItem>
                        <ListItem style={style.listItem} className='dropdown-list'>
                            <Link to='/app/logout' style={style.link}>
                                <ListItemIcon>
                                    <ExitToApp style={style.icon} />
                                </ListItemIcon>
                                <ListItemText primary='Logout' />
                            </Link>
                        </ListItem>
                    </List>
                </div>
            </IconButton>
        </div>
    )
}
const style = {
    picContainer:{
        display:'flex',
        position:'relative'
    },
    IconButton:{
        position:'relative'
    },
    OpendropDownContainer:{
        position:'absolute',
        top: '73px',
        right:'0px',
        background:'transparent',
        width:'250px',
        zIndex:500,
        transition: 'height 700ms, overflow 1s',
        height: '400px',
        overflow:'hidden'
    },
    ClosedropDownContainer:{
        position: 'absolute',
        top: '73px',
        right: '0px',
        background: 'transparent',
        width: '250px',
        zIndex: 500,
        height:'0px',
        transition: 'height 700ms,overflow 1s',
        overflow: 'hidden'
    },
    list:{
        overflow:'hidden',
        position:'relative',
        top:'20px',
        background: '#ffffff',
        width:'100%',
        zIndex:401,
        color:'white',
        padding:'0px',
    },
    listItem:{
        "&:hover":{
            background: "red"
        },
    },
    link:{
        display:'flex',
        placeItems:'center'
        
    },
    traingle:{
        position: 'absolute',
        top: '0px',
        right: '2px',
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0px 30px 40px 30px ',
        bordeColor: 'transparent transparent red transparent',
        zIndex: 400,
    },
    icon:{
        color:'black'
    }
}
const mapStateToProsp = (state) =>{
    return state
}
export default connect(mapStateToProsp) (Header)
