import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function TestTemplate(props) {
    return (
        <div className='test-template'>
            <div className="test-templete_head">
                <Typography align='center' variant='h5'>{props.title}</Typography>
            </div>
            <div className="test_template_tail">
                <div>
                    <div className="card_flex">
                        <span>Standard </span> <span>{props.standard}</span>
                    </div>
                    <div className="card_flex">
                        <span>Stream </span> <span>{props.stream.toUpperCase()}</span>
                    </div>
                    <div className="card_flex">
                        <span>Subject </span> <span>{props.subject.toUpperCase()}</span>
                    </div>
                    <div className="card_flex">
                        <span>Category </span> <span>{props.type.toUpperCase()}</span>
                    </div>
                    <div className="card_flex">
                        <span>{props.type==='yearwise'?'Year': 'Chapter'} </span> <span>{props.type_value.toUpperCase()}</span>
                    </div>
                    
                    <div className="card_flex">
                        <span>Questions </span> <span>{props.questions.length}</span>
                    </div>
                    <div className="card_flex">
                        <span>Time </span> <span>{props.time}m</span>
                    </div>
                </div>
                <div className="btn-container">
                    <Button variant='contained' color='secondary'><Link to={`/my/live-test?${props._id}`}>Start</Link></Button>
                    
                </div>
            </div>
        </div>
    )
}

export default TestTemplate
