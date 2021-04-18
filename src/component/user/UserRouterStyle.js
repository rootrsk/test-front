import { makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = 300
export default  makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& .MuiSvgIcon-root': {
            color: 'white'
        },
        '& .MuiListItem-root': {
            width: '80%',
            margin: 'auto',
            marginTop:'5px',
            borderRadius: '5px'
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: '#183640'
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        background: '#183640',
        // display: 'none'
        
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        background: '#183640',
        color:'white'
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        background: '#183640',
    },
    toolbar: {
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: '#eeeeee',
        position:'relative',
        bottom:'0px'
    },
    avatar:{
        display:'flex',
        justifyContent:'flex-end',
        width:'100%',
        placeItems:'center'
    },
    navLink:{
        color:'white'
    },
    activeLink: {
        '& .MuiSvgIcon-root': {
        },
        '& .MuiListItem-root':{
            background: '#289672',
            width:'80%',
            margin:'auto',
            borderRadius:'5px',
            marginTop: '5px',
        }
    }
}));