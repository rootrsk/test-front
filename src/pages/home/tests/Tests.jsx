
import './tests.css'
import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchTests } from "../../../store/actions/tests"
import Header from "../../../component/home/Header"
import TestTemplate from "../../../component/home/TestTemplate"
import HorizontalCard from '../../../component/home/HorizontalCard'

function Tests(props) {

    useEffect(()=>{
        if(props.tests.test.length>0){
            return
        }
        fetchTests()
    },[])
    return (
        <div>
            <Header />
            <div className="tests">
                {props.tests.test &&
                    props.tests.test.map((test)=> <TestTemplate {...test} key={test._id} user={!!props.auth.user} history={props.history} />)
                }
                {props.tests.test &&
                    props.tests.test.map((test)=> <HorizontalCard {...test} key={test._id} user={!!props.auth.user} history={props.history} />)
                }
            </div>
            
        </div>
    )
}
const mapStateToProps = state => state

export default connect(mapStateToProps) (Tests)
