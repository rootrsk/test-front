import { Button } from "@material-ui/core";

function NotificationTemplate(props) {
    const {_id,title,image,link,description,full_description} = props
    return (
        <div>
            <div style={style.container} className='shadow'>
                <div style={style.imageDiv}>
                    <img src={props.image} style={style.image} alt="poster"/>
                </div>
                <div style={style.details}>
                    <div style={style.head}>
                        <h2>{props.title}</h2>
                    </div>
                    <div style={style.middle}>
                        <p>{props.description}</p>
                    </div>
                    <div style={style.tail}>
                        <Button style={style.button}>
                            Visit Site
                        </Button>
                        {props.edit && 
                            <Button onClick={()=>
                                    props.edit({
                                        _id,
                                        title,
                                        image,
                                        link,
                                        description,
                                        full_description
                                    })
                                } >
                                Edit
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
const style ={
    container:{
        display:'flex',
        margin:'20px 0px',
    },
    image:{
        width:'130px',
        height:'130px',
        placeItems:'center'
    },
    details:{
        padding:'0px 20px'
    }

}
export default NotificationTemplate
