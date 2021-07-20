import React, { useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { Close, Description, Image, Link, Title } from '@material-ui/icons';
import { getApi,postApi,patchApi,deleteApi} from '../../../utils/adminApi'
import { Button, IconButton } from '@material-ui/core';


function NotificationForm(props) {
    const [_id,setId] = useState(props.notification && props.notification._id|| '')
    console.log(_id)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const [notification,setNotification] =  useState(props.notification || {
        title:'',
        image:'',
        link:'',
        description:'',
        full_description:''
    })
    const serverHandler = async(action) =>{
        setLoading(true)
        setError('')
        let result;
        switch (action) {
            case 'get':
                result = await getApi({url:'/notifications',data:{...notification}})
                break;
            case 'create':
                result = await postApi({url:'/notifications',data:{...notification}})
                break;
            case 'update':
                result = await patchApi({url:'/notifications',data:{...notification,_id}})
                break;
            case 'delete':
                result = await deleteApi({url:'/notifications',data:{_id}})
                break;
            default:
                break;
        }
        console.log(result)
        setLoading(false)
    }
    const handleChange =(key)=>(e)=> setNotification({...notification,[key]:e.target.value})
    return (
        <div style={style.root}>
            <div className="form_div" style={style.form}>
                <div style={style.head}>
                    <h1>Form</h1>
                    {props.close && 
                    <IconButton onClick={props.close}>
                        <Close />
                    </IconButton>
                    }
                </div>
                <FormControl fullWidth style={style.formControl} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
                    <OutlinedInput
                        value={notification.title}
                        onChange={handleChange('title')}
                        startAdornment={
                            <InputAdornment position="start">
                                <Title />
                            </InputAdornment>
                        }
                        labelWidth={40}
                    />
                </FormControl>
                <FormControl fullWidth style={style.formControl} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Image</InputLabel>
                    <OutlinedInput
                        value={notification.image}
                        onChange={handleChange('image')}
                        startAdornment={
                            <InputAdornment position="start">
                                <Image />
                            </InputAdornment>
                        }
                        labelWidth={60}
                    />
                </FormControl>
                <FormControl fullWidth style={style.formControl} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Link</InputLabel>
                    <OutlinedInput
                        value={notification.link}
                        onChange={handleChange('link')}
                        startAdornment={
                            <InputAdornment position="start">
                                <Link />
                            </InputAdornment>
                        }
                        labelWidth={60}
                    />
                </FormControl>
                <FormControl fullWidth style={style.formControl} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
                    <OutlinedInput
                        value={notification.description}
                        onChange={handleChange('description')}
                        startAdornment={
                            <InputAdornment position="start">
                                <Description />
                            </InputAdornment>
                        }
                        labelWidth={60}
                    />
                </FormControl>
                <FormControl fullWidth style={style.formControl} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
                    <OutlinedInput
                        value={notification.full_description}
                        onChange={handleChange('full_description')}
                        startAdornment={
                            <InputAdornment position="start">
                                <Description />
                            </InputAdornment>
                        }
                        labelWidth={60}
                    />
                </FormControl>
                <div >
                    {!_id&& <Button variant='contained' style={style.button} onClick={()=>serverHandler('create')}>Add</Button>}
                    {_id && <Button variant='contained' style={style.button} onClick={()=>serverHandler('update')}>Update</Button>}
                    {_id && <Button variant='contained' style={style.button} onClick={()=>serverHandler('delete')}>Delete</Button>}
                    {loading && <Button variant='contained'>Loading...</Button>}
                </div>
            </div>
        </div>
    )
}

const style={
    root:{
        background:'white',
        borderRadius:'5px'
    },
    head:{
        display:'flex',
        justifyContent:'space-between',
        padding:'20px 0px'
    },
    form:{
        width:'90%',
        margin:'auto'
    },
    formControl:{
        margin:'20px 0px'
    },
    button:{
        background:'blue',
        color:'white',
        margin:'0px 10px 0px 0px'
    }

}

export default NotificationForm
