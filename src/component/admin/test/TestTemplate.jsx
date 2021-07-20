import { Avatar, Button, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function TestTemplate(props) {
    console.log(props)
    return (
        <div className='test-template'>
            <div className="test-templete_head">
                
                <Avatar src='https://e7.pngegg.com/pngimages/340/843/png-clipart-rail-transport-indian-railways-railway-recruitment-board-exam-rrb-south-east-central-railway-zone-india-text-logo.png' style={{ width: '60px', height: '60px' }} />

                <p className='test-title'>{props.title}</p>
            
            </div>
            <div className="test_template_tail">
                <div>
                    <div className="card_flex">
                        <span>Type </span> <span>{props.type === 'live' ? 'Live' : props.type === 'quiz' ? 'Quiz' : 'Test'}</span>
                    </div>
                    <div className="card_flex">
                        <span>Category </span>
                        <span>
                            {
                                props.category === 'yr' ? 'Previous Year' : props.category === 'cw' ? 'Chapter Based' :
                                    props.category === 'sw' ? 'Subject Based' : 'Set Based'
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
                        {/* <span>Stream </span> <span>{props.stream.toUpperCase()}</span> */}
                    </div>

                    <div className="card_flex">
                        <span>Language </span>
                        <span>
                            {
                                props.language === 'h' ? 'Hindi' : props.language === 'e' ? 'English' : props.language === 'he' ? 'Hin-Eng' : 'NA'
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
                    <Button variant='contained' color='secondary'><Link to={`/admin/test-edit?${props._id}`}>Edit</Link></Button>
                    <Button variant='contained' color='secondary'>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default TestTemplate
