import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, Route, Switch, Link} from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RouterStyle from './UserRouterStyle'
import LiveTest from './test/LiveTest';
import Result from './test/Result';
// import Dashboard from './Dashboard'
// import Profile from './Profile';
import Setting from './Setting';
import Logout from './Logout';
import { AssignmentTurnedIn, ExitToApp, Home, Mail, Note, Notifications, Person, Settings } from '@material-ui/icons';
import { Avatar, Badge, Divider } from '@material-ui/core';
// import TestVerification from '../home/TestVerification';
import { setLoginForm } from '../../store/actions/login';
import TestVerification from '../../pages/user/tests/TestVerification';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SwipeableNav from './SwipeableNav';
import './style.css'
import Dashboard from '../../pages/user/dashboard/Dashboard';
import Profile from '../../pages/profile/Profile';

function MiniDrawer(props) {
    const classes = RouterStyle();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const checkLoginHandler = () =>{
        if(!props.auth.authenticated){
            props.history.push(`/?next=${props.location.pathname}${props.location.search}`)
        }
    }
    useEffect(() => {
        checkLoginHandler()
    }, []);

    return(
        <div className={classes.root} className='user-header'>
            {/* <CssBaseline /> */}
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {[classes.appBarShift]: open,},'appbar')}
                // className = 'user-appbar'
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon className='menu-icon' />
                    </IconButton>
                    <div className={classes.avatar}>
                        <IconButton style={{}}>
                            <Badge badgeContent={0} color="primary" >
                                <Mail />
                            </Badge>
                        </IconButton>
                        <IconButton style={{margin:'0px 20px 0px 0px'}}>
                            <Badge badgeContent={0} color="primary" >
                                <Notifications />
                            </Badge>
                        </IconButton>
                        <Avatar src={'https://eshendetesia.com/images/user-profile.png'} />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                display={{ xs: 'none', sm: 'none' }}
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                },'drawer')}
                
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                variant = "permanent"
            >
                <div className='toolbar'>
                    <div className="logo">
                        <Link className='' to='/' ><span>Testhunt</span></Link>
                    </div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                
                {/* <Divider /> */}
                <List className='sidebar'>
                    <NavLink activeClassName='active-route' className='route-link' to='/' exact>
                        <ListItem className='route-list'>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText>
                                Home
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                    <NavLink activeClassName='active-route' className='route-link' to='/app/dashboard'>
                        <ListItem className='route-list'>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Dashboard
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                    <NavLink activeClassName='active-route' className='route-link'  to='/app/profile'>
                        <ListItem className='route-list'>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText>
                                Profile
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                <NavLink activeClassName='active-route' className='route-link' to='/app/tests'>
                    <ListItem className='route-list'>
                        <ListItemIcon>
                            <Note />
                        </ListItemIcon>
                        <ListItemText>
                            Tests
                        </ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink activeClassName='active-route' className='route-link' to='/app/completed-tests'>
                    <ListItem className='route-list'>
                        <ListItemIcon>
                            <AssignmentTurnedIn />
                        </ListItemIcon>
                        <ListItemText>
                            Completed Tests
                        </ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink activeClassName='active-route' className='route-link' to='/app/settings'>
                    <ListItem className='route-list'>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText>
                            Settings
                        </ListItemText>
                    </ListItem>
                </NavLink>
                {/* <NavLink activeClassName='active-route' className='route-link' to='/app/logout'>
                    <ListItem>
                        <ListItemIcon>
                            <ExitToApp />
                        </ListItemIcon>
                        <ListItemText>
                            Logout
                        </ListItemText>
                    </ListItem>
                </NavLink> */}
                </List>
                
                <div className="bottom-div">
                    <Divider />
                    <List className='bottom'>
                        <NavLink activeClassName='active-route' className='route-link' to='/app/logout'>
                            <ListItem>
                                <ListItemIcon>
                                    <ExitToApp />
                                </ListItemIcon>
                                <ListItemText>
                                    Logout
                                </ListItemText>
                            </ListItem>
                        </NavLink>
                    </List>
                </div>
                
        </Drawer>
        <main className='' className={open ? 'content-open':'content-close'}>
                <Switch>
                    <Route path='/app/dashboard' component={Dashboard} />
                    <Route path='/app/profile' component={Profile} />
                    <Route path='/app/live-test' component={LiveTest} />
                    <Route path='/app/result' component={Result} />
                    <Route path='/app/settings' component={Setting} />
                    <Route path='/app/test-verification' component={TestVerification} />
                    <Route path='/app/logout' component={Logout} />
                </Switch>
        </main>
        </div>
    );
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps) (MiniDrawer)