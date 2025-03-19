import { useState , useContext, useEffect} from 'react';
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/feedbackContext';

function FeedbackForm(){
    const {addFeedback, FeedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const [text, settext] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [rating, setRating] = useState(10);
    const [msg, setmessage] = useState('');

    //runs when FeedbackEdit changes, i.e.. when you click the edit button
    useEffect(()=>{
        if(FeedbackEdit.edit){
            // console.log('hello');
            settext(FeedbackEdit.item.text)
            setRating(FeedbackEdit.item.rating)
            setbtnDisabled(false);
            // we have to set it in separet component also to update in ui
        }
    },[FeedbackEdit])


    const handleChange = (e) =>{
        let newtext = e.target.value;
        settext(newtext)
        if(newtext===''){
            setbtnDisabled(true);
            setmessage(null);
        }
        else if(newtext!=='' && newtext.trim().length<10){
            setbtnDisabled(true);
            setmessage('At least 10 characters required!');
        }
        else{
            setbtnDisabled(false);
            setmessage(null);
        }
        
    }

    function handleSubmit(e){
        e.preventDefault();
        if(text.trim().length>=10){
            const newfeedback = {
                text:text,
                rating:rating,
            }
            if(FeedbackEdit.edit){
                updateFeedback(FeedbackEdit.item.id, newfeedback)
            }
            else{
                addFeedback(newfeedback);
            }
            
            settext('');
        }
    }

    return <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you like to rate?</h2>
            <RatingSelect select = {(rating) => setRating(rating)}/> 
            <div className="input-group">
                <input onChange={handleChange} type="text" placeholder='Write a Review' value = {text}/>
                <Button version='primary' type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {msg && <div className='message'>{msg}</div>}
        </form>
    </Card>;
}

export default FeedbackForm