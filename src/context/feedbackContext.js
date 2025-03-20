import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid"



const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:"The food arrived hot and on time! The packaging was great, but the portion size was a bit smaller than expected. Overall, a good experience!",
            rating:8
        },
        {
            id:2,
            text:"Excellent service! The mechanic was knowledgeable, explained everything clearly, and the repairs were done quickly. My car runs like new again!",
            rating:10
        },
        {
            id:3,
            text:"Frequent connection drops and slow speeds despite paying for a premium plan. Customer support was polite but couldn’t resolve my issue.",
            rating:4
        }
    ])

    // const[isLoading, setisLoading] = useState(true)

    // useEffect(()=>{
    //     fetchFeedback() 
    // }, [])

    //fetch api fetchin feedback from json 
    // const fetchFeedback =  () =>{
    //     // const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
    //     const response = await fetch("/feedback?_sort=id&_order=desc") // we can do this because we have added a proxy in package.json
    //     const data = await response.json();
    //     setFeedback(data);
    //     setisLoading(false)
    // }

    const [FeedbackEdit, setFeedBackEdit] = useState({
        item:{},
        edit:false
    })
    // doasync
    const deleteFeedback =  (id) => {
        if(window.confirm('Do you want to delete this feedback?')){
            // await fetch(`/feedback/${id}`, {method:'DELETE'})
            setFeedback(feedback.filter((item)=> item.id!==id));
        }  
    }

    const editFeedback = (item) => {
        setFeedBackEdit({
            item,
            edit:true
        })
    }
    // do async
    const updateFeedback = (id, newitem) => {
        // const response = await fetch(`feedback/${id}`,{
        //     method:'PUT',
        //     headers:{
        //         'Content-Type' : 'application/json'
        //     },
        //     body : JSON.stringify(newitem)
        // })

        // let data = await response.json();
        setFeedback(feedback.map((item)=>{
           return  id===item.id ? {...item, ...newitem } : item
        }))
        FeedbackEdit.edit=false;
    }
    //do async
    const addFeedback = (newfeedback) =>{
        // const response = await fetch('/feedback',{
        //     method : 'POST',
        //     headers : {
        //         'Content-Type' : 'application/json'
        //     },
        //     body: JSON.stringify(newfeedback)
        // })
        // const data = await response.json()
        newfeedback.id = uuidv4()
        setFeedback([newfeedback,...feedback])
        // setFeedback([data,...feedback])
    }
    
    return <FeedbackContext.Provider value={{
        feedback,
        FeedbackEdit,
        // isLoading,
        addFeedback,
        deleteFeedback, 
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext;