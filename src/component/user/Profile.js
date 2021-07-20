import { Avatar, FormControl, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core"
import { Call, Email, LocationCity, Person } from "@material-ui/icons"
import { useState } from "react"
import { connect } from "react-redux"
import ProfileStyle from './ProfileStyle'
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
        <div>
             <div className={classes.root} style={{backgroundColor:'white',padding:'30px'}}>

                <div>
                    <div className="user_prfile-pic" style={{display:'grid',placeItems:'center'}}>
                        <Avatar src={'https://eshendetesia.com/images/user-profile.png'}  style={{width:'300px',height:'300px',margin:'20px 0px'}}/>
                    </div>
                    
                    <FormControl fullWidth className={'classes.margin'} variant="outlined">
                        <InputLabel >Username</InputLabel>
                        <OutlinedInput
                            
                            value={user.username}
                            // onChange={'handleChange('amount')'}
                            startAdornment={<InputAdornment  position="start"><Person style={{color:'black'}} /> </InputAdornment>}
                            labelWidth={75}
                        />
                    </FormControl>
                    <FormControl fullWidth className={'classes.margin'} variant="outlined">
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
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps) (Profile)
