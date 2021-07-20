import React from 'react'
import playButton from '../../images/playbutton.png'
import { setLoginForm } from "../../store/actions/login";
function HorizontalCard(props) {
    const category=props.category==='sw'?'Subject': props.category==='cw' ?'Chapter':props.category==='yr'?'Previous Year': 'Set'
    const type = props.type==='live'?'Live':props.type==='test'?'Test':props.type==='pr'?'Practice':'Quiz'
    const language = props.language==='h'?'Hindi':props.language==='e'?'English':'Hin-Eng'
    const goToTestVerificationPage = () =>{
        if(props.user){
           return props.history.push(`/app/test-verification?${props._id}`)
        }
        setLoginForm(true)
    }
    return (
        <div className='horizontal-card-container'>
            <div className="horizontal-card-header">
                <div className="card-logo_container">
                    <img src={props.logo} alt="" />
                    
                </div>
                <div className='horizontal-title'>
                    <p className="title">
                        {props.title}
                    </p>
                    <div className="caption">
                        {props.cat_value}
                    </div>
                </div>
            </div>
            <div className="horizontal-card-footer">
                <div className='flex-box_between'>
                    <p className='caption'> 
                        <span className="iconify s-icon" data-icon="ant-design:info-circle-filled" ></span> 
                        {category}
                    </p>
                    <p className='caption'> 
                        <span className="iconify s-icon"  data-icon="fluent:note-20-regular" ></span> 
                        {props.questions} Questions
                    </p>
                    <p className='caption'> 
                        <span className="iconify s-icon"  data-icon="bx:bx-time-five"></span> 
                        {props.time_limit} MIns
                    </p>
                </div>
                <div className='flex-box_between'>
                    <p className='caption'> 
                        <span className="iconify s-icon" data-inline="false" data-icon="la-language" ></span> 
                        {language}
                    </p>
                    <p className='caption'> 
                        <span className="iconify s-icon" data-inline="false" data-icon="fluent:live-24-regular" ></span> 
                        {type}
                    </p>
                    <button className='start-button' onClick={()=>goToTestVerificationPage()}>
                        <img src={playButton}  />
                    </button>
                    
                </div>
                <div className='flex-flex-center'>
                    <p className='caption'> 
                        <span className="iconify s-icon" data-inline="false" data-icon="bx:bx-rupee" ></span> 
                        Free
                    </p>
                    
                </div>
                
            </div>
        </div>
    )
}

export default HorizontalCard
