import { makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = 250
export default  makeStyles((theme) => ({
    root: {
        display: 'flex',
        // '& .MuiSvgIcon-root': {
        //     color: 'white'
        // },
        // '& .MuiListItem-root': {
        //     width: '80%',
        //     margin: 'auto',
        //     marginTop:'5px',
        //     borderRadius: '5px'
        // },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        // transition: theme.transitions.create(['width', 'margin'], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        // }),
        boxShadow:'none'
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        // transition: theme.transitions.create(['width', 'margin'], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.enteringScreen,
        // }),
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
        backgroundColor:'red'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        background:'inherit'
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: '0px',
    },
    toolbar: {
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        
    },
    avatar:{
        display:'flex',
        justifyContent:'flex-end',
        width:'100%',
        placeItems:'center'
    },
}));