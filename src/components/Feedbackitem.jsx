import { useContext, useState } from "react"
import Card from './shared/Card'
import { MdDelete, MdEdit } from "react-icons/md";
import FeedbackContext from "../context/feedbackContext";
function Feedbackitem({item}){
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">
                {item.rating}
            </div>
            <button onClick={()=> editFeedback(item)} className='edit'>
                <MdEdit color='purple'/>
            </button>
            <button onClick={()=> deleteFeedback(item.id)} className="close">
                <MdDelete color='purple'/>
            </button>
            <div className="text-display">
                {item.text}
            </div>
        </Card>
    )
}

export default Feedbackitem