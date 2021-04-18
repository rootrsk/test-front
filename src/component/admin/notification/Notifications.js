import { Button, IconButton, Modal } from "@material-ui/core"
import { Add } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { adminDeleteApi, adminGetApi } from '../../../utils/apiHandler'
import NotificationForm from "./NotificationForm"
import NotificationTemplate from "./NotificationTemplate"
function Notifications() {
    const [notifications ,setNotifications] = useState([])
    const [notification,setNotification] = useState(null)
    const [loading,setLoading] = useState(false)
    const [model,setModel] = useState(false)
    const getNotification = async()=>{
        const data = await adminGetApi({url:'/notifications'})
         setLoading(false)
        if(data.status==='success'){
           setNotifications(data.notifications)
        }
        console.log(data)
    }
    const editHandler = (data)=>{
        setNotification({...data})
        setModel(true)
    }
    useEffect(()=>{
        getNotification()
    },[])
    return (
        <>
        <div style={style.container}>
            {notifications.length>0 && 
                notifications.map((notification)=>{
                    return<NotificationTemplate {...notification} admin={true} edit={editHandler} />
                })
            }
        </div> 
        <IconButton style={style.button} onClick={()=>{setModel(true)}}>
            <Add />
        </IconButton>
        <Modal
            open={model}
            onClose={()=>setModel(!model)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={style.model}
        >
            <NotificationForm notification = {notification}  close={()=>{setModel(false)}} />
        </Modal>
        

        </>
    )
}
const style = {
    container:{
        width:'90%',
        margin:'auto'
    },
    button:{
        background:'blue',
        position:'absolute',
        color:'white',
        bottom:'20px',
        right:'20px',
    },
    model:{
        maxWidth:'700px',
        margin:'auto',
        display:'flex',
        placeItem:'center',
        height:'630px'
    }
}
export default Notifications
