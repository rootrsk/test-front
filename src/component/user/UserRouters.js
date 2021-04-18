import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, Route, Switch} from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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
import Dashboard from './Dashboard'
import Profile from './Profile';
import Setting from './Setting';
import Logout from './Logout';
import { AssignmentTurnedIn, ExitToApp, Home, Mail, Note, Notifications, Person, Settings } from '@material-ui/icons';
import { Avatar, Badge } from '@material-ui/core';

function MiniDrawer(props) {
  const classes = RouterStyle();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const checkLoginHandler = () =>{
      console.log(props)
        console.log(props)
        if(!props.auth.authenticated){
            props.history.push(`/?next=${props.location.pathname}`)
            props.dispatch({
                type:'SET_OPEN'
            })
        }
    }
    useEffect(() => {
        checkLoginHandler()
    }, []);

  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                [classes.hide]: open,
                })}>
                <MenuIcon />
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
            display={{ xs: 'none', sm: 'block' }}
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}>
            <div className={classes.toolbar}>
                <h1>Testhnt</h1>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            {/* <Divider /> */}
            <List>
                <NavLink activeClassName={classes.activeLink} className={classes.navLink} to='/' exact>
                <ListItem>
                    <ListItemIcon>
                        <Home style={{color:'white'}}/>
                    </ListItemIcon>
                    <ListItemText>
                        Home
                    </ListItemText>
                </ListItem>
            </NavLink>
            <NavLink activeClassName={classes.activeLink} className={classes.navLink} to='/app/dashboard'>
                <ListItem>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Dashboard
                    </ListItemText>
                </ListItem>
            </NavLink>
            <NavLink activeClassName={classes.activeLink} className={classes.navLink}  to='/app/profile'>
                <ListItem>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText>
                        Profile
                    </ListItemText>
                </ListItem>
            </NavLink>
            <NavLink activeClassName={classes.activeLink} className={classes.navLink} to='/app/tests'>
                <ListItem>
                    <ListItemIcon>
                        <Note />
                    </ListItemIcon>
                    <ListItemText>
                        app Tests
                    </ListItemText>
                </ListItem>
            </NavLink>
            <NavLink activeClassName={classes.activeLink} className={classes.navLink} to='/app/completed-tests'>
                <ListItem>
                    <ListItemIcon>
                        <AssignmentTurnedIn />
                    </ListItemIcon>
                    <ListItemText>
                        Completed Tests
                    </ListItemText>
                </ListItem>
            </NavLink>
            <NavLink activeClassName={classes.activeLink} className={classes.navLink} to='/app/settings'>
                <ListItem>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText>
                        Settings
                    </ListItemText>
                </ListItem>
            </NavLink>
            <NavLink activeClassName={classes.activeLink} className={classes.navLink} to='/app/logout'>
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
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Switch>
                <Route path='/app/dashboard' component={Dashboard} />
                <Route path='/app/profile' component={Profile} />
                <Route path='/app/live-test' component={LiveTest} />
                <Route path='/app/result' component={Result} />
                <Route path='/app/settings' component={Setting} />
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