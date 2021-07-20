import { Avatar, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core"
import { Call, Email, LocationCity, Person, School, AccountBalance, DateRange, SettingsBrightness, 
        Notifications, Public,FontDownload, Wc
    } from "@material-ui/icons"
import { useState } from "react"
import { connect } from "react-redux"
import ProfileStyle from './ProfileStyle'
import './profile.css'
function Profile(props) {
    console.log(props.auth.user)
    const [user,setUser] = useState(props.auth.user || {
        username:'Loading',
        email:'Loading',
        contact:'Loading',
        city:'Loading'
    })
    const classes = ProfileStyle()
    return (
        <div className='profile-page'>
            <Grid container spacing={2}   >
                <Grid item xs={12} sm={12} md={6}>
                    <div className='container p-tb_10'>
                        <div className="user_prfile-pic">
                            <Avatar src={'https://eshendetesia.com/images/user-profile.png'}  className='avatar'/>
                        </div>
                        <p className='b-c_title'>{user.full_name}</p>
                        <div className='flex-box_around'>
                            <div className="flex-box_p_center">
                                <span class="iconify title-icon" data-icon="bi:info-circle-fill"></span>
                                <p>{user.username}</p>
                            </div>
                            <div className="flex-box_p_center">
                                <span class="iconify title-icon" data-icon="bi:info-circle-fill"></span>
                                <p>{user.email}</p>
                            </div>
                            <div className="flex-box_p_center">
                                <span class="iconify title-icon" data-icon="bi:info-circle-fill"></span>
                                <p>+91{user.contact_no}</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="title-container">
                            <span class="iconify title-icon" data-icon="bi:info-circle-fill"></span>
                            <p className='title'>Basic Information</p>
                        </div>
                        <div className='container-10 p-tb_10'>
                            
                            <label className='label'>Username</label>
                            <div className='title-container form-control' >
                                <Person /> 
                                <input  
                                    className='profile-input' 
                                    value={user.username}
                                />
                            </div>
                            <label className='label'>Full Name</label>
                            <div className='title-container form-control' >
                                <Person /> 
                                <input  
                                    className='profile-input' 
                                    value={user.full_name}
                                />
                            </div>
                            <label className='label'>Email</label>
                            <div className='title-container form-control' >
                                <Email /> 
                                <input  
                                    className='profile-input' 
                                    value={user.email}
                                />
                            </div>
                            <label className='label'>Contact</label>
                            <div className='title-container form-control' >
                                <Call /> 
                                <input  
                                    className='profile-input' 
                                    value={user.contact_no}
                                />
                            </div>
                            <label className='label'>City</label>
                            <div className='title-container form-control' >
                                <LocationCity /> 
                                <input  
                                    className='profile-input' 
                                    value={user.city}
                                />
                            </div>
                            <div className="flex-box_end">
                                    <input type="button" value="Update" className='user-update_button' />
                            </div>
                        
                        </div>
                    </div>
                </Grid>
                <Grid item sm={12} xs={12} md={6} >
                    <div className='container'>
                        <div className="title-container">
                            <span class="iconify title-icon" data-icon="fluent:textbox-more-24-filled"></span>
                            <p className='title'>Additional Information</p>
                        </div>
                        <div className='container-10 p-tb_10'>
                            
                            <label className='label'>Gender</label>
                            <div className='title-container form-control' >
                                <Wc /> 
                                <input  
                                    className='profile-input' 
                                    value={user.gender}
                                />
                            </div>
                            <label className='label'>College/School</label>
                            <div className='title-container form-control' >
                                <AccountBalance /> 
                                <input  
                                    className='profile-input' 
                                    value={user.school}
                                />
                            </div>
                            <label className='label'>Qualification</label>
                            <div className='title-container form-control' >
                                <School /> 
                                <input  
                                    className='profile-input' 
                                    value={user.qualification}
                                />
                            </div>
                            <label className='label'>Date of Birth</label>
                            <div className='title-container form-control' >
                                <DateRange /> 
                                <input  
                                    className='profile-input' 
                                    value={user.dob}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className="title-container">
                            <span class="iconify title-icon" data-icon="ant-design:setting-filled"></span>
                            <p className='title'>Settings</p>
                        </div>
                        <div className='container-10 p-tb_10'>
                            
                            <label className='label'>Theme</label>
                            <div className='title-container form-control' >
                                <SettingsBrightness /> 
                                <input  
                                    className='profile-input' 
                                    value={user.theme}
                                />
                            </div>
                            <label className='label'>Notification</label>
                            <div className='title-container form-control' >
                                <Notifications /> 
                                <input  
                                    className='profile-input' 
                                    value={user.notification}
                                />
                            </div>
                            <label className='label'>Status</label>
                            <div className='title-container form-control' >
                                <Public /> 
                                <input  
                                    className='profile-input' 
                                    value={user.status}
                                />
                            </div>
                            <label className='label'>Font Family</label>
                            <div className='title-container form-control' >
                                <FontDownload /> 
                                {/* <input  
                                    className='profile-input' 
                                    value={user.contact_no}
                                /> */}
                                <select className='profile-input' value={user.font}>
                                    <option className='option'>Font 1</option>
                                    <option>Font 2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
             {/* <div>
                <div>
                    <div className="user_prfile-pic" style={{display:'grid',placeItems:'center'}}>
                        <Avatar src={'https://eshendetesia.com/images/user-profile.png'}  style={{width:'300px',height:'300px',margin:'20px 0px'}}/>
                    </div>
                    
                    <FormControl fullWidth className={'form-control'} variant="outlined">
                        <InputLabel >Username</InputLabel>
                        <OutlinedInput
                            
                            value={user.username}
                            // onChange={'handleChange('amount')'}
                            startAdornment={<InputAdornment  position="start"><Person style={{color:'black'}} /> </InputAdornment>}
                            labelWidth={75}
                        />
                    </FormControl>
                    <FormControl fullWidth className={'form-control'} variant="outlined">
                        <InputLabel >Email</InputLabel>
                        <OutlinedInput
                            
                            value={user.email}
                            // onChange={'handleChange('amount')'}
                            startAdornment={<InputAdornment  position="start"><Email style={{color:'black'}} /> </InputAdornment>}
                            labelWidth={40}
                        />
                    </FormControl>
                    <FormControl fullWidth className={'classes.margin'} variant="outlined">
                        <InputLabel >Contact</InputLabel>
                        <OutlinedInput
                            
                            value={user.contact_no}
                            // onChange={'handleChange('amount')'}
                            startAdornment={<InputAdornment  position="start"><Call style={{color:'black'}} /> </InputAdornment>}
                            labelWidth={60}
                        />
                    </FormControl>
                    <FormControl fullWidth className={'classes.margin'} variant="outlined">
                        <InputLabel >City</InputLabel>
                        <OutlinedInput
                            
                            value={user.city}
                            // onChange={'handleChange('amount')'}
                            startAdornment={<InputAdornment  position="start"><LocationCity style={{color:'black'}} /> </InputAdornment>}
                            labelWidth={40}
                        />
                    </FormControl>
                    <div style={{display:'flex',justifyContent:'flex-end'}}>
                        <button className='p-btn' style={{margin:'10px 0px'}}>Update</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps) (Profile)
