import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid"



const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'This is feedback item 1',
            rating:10
        },
        {
            id:2,
            text:'This is feedback item 2',
            rating:6
        },
        {
            id:3 ,
            text:'This is feedback item 3',
            rating:3
        }
    ])

    const [FeedbackEdit, setFeedBackEdit] = useState({
        item:{},
        edit:false
    })

    const deleteFeedback = (id) => {
        if(window.confirm('Do you want to delete this feedback?')){
            setFeedback(feedback.filter((item)=> item.id!==id));
        }  
    }

    const editFeedback = (item) => {
        setFeedBackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback = (id, newitem) => {
        setFeedback(feedback.map((item)=>{
           return  id===item.id ? {...item, ...newitem} : item
        }))
        FeedbackEdit.edit=false;
    }
    
    const addFeedback = (newfeedback) =>{
        newfeedback.id = uuidv4()
        setFeedback([newfeedback,...feedback])
    }
    
    return <FeedbackContext.Provider value={{
        feedback,
        FeedbackEdit,
        addFeedback,
        deleteFeedback, 
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext;