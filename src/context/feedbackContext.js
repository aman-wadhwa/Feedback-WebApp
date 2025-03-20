import { useState, createContext, useEffect} from "react";
// import { v4 as uuidv4 } from "uuid"



const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([])

    const[isLoading, setisLoading] = useState(true)

    useEffect(()=>{
        fetchFeedback() 
    }, [])

    //fetch api fetchin feedback from json 
    const fetchFeedback = async () =>{
        // const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
        const response = await fetch("/feedback?_sort=id&_order=desc") // we can do this because we have added a proxy in package.json
        const data = await response.json();
        setFeedback(data);
        setisLoading(false)
    }

    const [FeedbackEdit, setFeedBackEdit] = useState({
        item:{},
        edit:false
    })
    
    const deleteFeedback = async (id) => {
        if(window.confirm('Do you want to delete this feedback?')){
            await fetch(`/feedback/${id}`, {method:'DELETE'})
            setFeedback(feedback.filter((item)=> item.id!==id));
        }  
    }

    const editFeedback = (item) => {
        setFeedBackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback = async (id, newitem) => {
        const response = await fetch(`feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newitem)
        })

        let data = await response.json();
        setFeedback(feedback.map((item)=>{
           return  id===item.id ? {...item, ...data } : item
        }))
        FeedbackEdit.edit=false;
    }
    
    const addFeedback = async (newfeedback) =>{
        const response = await fetch('/feedback',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newfeedback)
        })
        const data = await response.json()
        // newfeedback.id = uuidv4()
        // setFeedback([newfeedback,...feedback])
        setFeedback([data,...feedback])
    }
    
    return <FeedbackContext.Provider value={{
        feedback,
        FeedbackEdit,
        isLoading,
        addFeedback,
        deleteFeedback, 
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext;