import { useState ,useContext, useEffect} from "react";
import FeedbackContext from "../context/feedbackContext";

function RatingSelect({select}){
     const {FeedbackEdit} = useContext(FeedbackContext);
     

     const [selected, setSelected] = useState(10);
   
   
     useEffect(()=>{
        if(FeedbackEdit.edit){
            setSelected(FeedbackEdit.item.rating)
        }
     },[FeedbackEdit])

    useEffect(()=>{
        if(FeedbackEdit.edit){
            console.log('hello');
            
        }
    },[FeedbackEdit])

     const handleChange = (e) => {
        setSelected(+e.target.value) // + is to convert to integer
        select( +e.target.value)
     }
    return (<ul className="rating">
        {Array.from({length:10},(_,i) =>{
            return (<li key={i}>
            <input type="radio" id={`num${i+1}`} name='rating' value={i+1} onChange={handleChange} checked={selected===i+1} />
            <label htmlFor={`num${i+1}`}>{i+1}</label>
        </li>)
        })
            
        }
        
        
     </ul>)
}
export default RatingSelect;