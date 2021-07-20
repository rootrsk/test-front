import { Avatar, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { setLoginForm } from "../../store/actions/login";

function TestTemplate(props) {
    const goToTestVerificationPage = () =>{
        if(props.user){
           return props.history.push(`/app/test-verification?${props._id}`)
        }
        setLoginForm(true)
    }
    return (
        <div className='test-template'>
            <div className="test-templete_head ">
                <Avatar src={props.logo} style={{width:'60px',height:'60px'}} />
                <p  className='test-title'>{props.title}</p>
            </div>
            <div className="test_template_tail">
                <div>
                    <div className="card_flex">
                        <span>Type </span> <span>{props.type==='live'?'Live':props.type==='quiz'?'Quiz':'Test'}</span>
                    </div>
                    <div className="card_flex">
                        <span>Category </span> 
                        <span>
                            {
                                props.category==='yw'?'Previous Year':props.category==='cw'?'Chapter Based':
                                props.category==='sw'?'Subject Based':'Set Based'
                            }
                        </span>
                    </div>
                    <div className="card_flex">
                        <span>
                            {
                                props.category === 'yr' ? 'Year' : props.category === 'cw' ? 'Chapter' :
                                props.category === 'sw' ? 'Subject' : 'Set'
                            }
                        </span>
                        <span>
                            {
                               props.cat_value
                            }
                        </span>
                    </div>
                    
                    <div className="card_flex">
                        <span>Langauge </span> 
                        <span>
                            {
                                props.langauge==='h'?'Hindi':props.langauge==='e'?'English':props.langauge==='he'?'Hin-Eng':'NA'
                            }
                        </span>
                    </div>
                    
                    <div className="card_flex">
                        <span>Questions </span> <span>{props.questions.length}</span>
                    </div>
                    <div className="card_flex">
                        <span>Time </span> <span>{props.time_limit}m</span>
                    </div>
                </div>
                <div className="btn-container">
                    <Button variant='contained' color='secondary' onClick={()=>goToTestVerificationPage()}>
                        Start
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TestTemplate
