import Feedbackitem from './Feedbackitem'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../context/feedbackContext'
import { useContext } from 'react'
import Spinner from './shared/Spinner'

function FeedbackList(){
    const {feedback, isLoading} = useContext(FeedbackContext)
    
    
    if(!isLoading && (!feedback || feedback.length===0)){
        return <p>No Feedback yet.</p>
    }
    // console.log(feedback)
    if(isLoading){ 
        return <Spinner/>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {
                    feedback.map((item, index)=>{
                        return (
                            <motion.div
                            key={item.id}
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            transition={{opacity:{duration:0.5}}}
                        >
                             <Feedbackitem key={item.id} item={item}/>
                        </motion.div>
                        )
                        
                    })
                }
            </AnimatePresence>
            
        </div>
        

        // <div className="feedback-list">
            
        //     {feedback.map((item, index)=>{
        //             return <Feedbackitem key={item.id} item={item} handleDelete={handleDelete}/>
        //         })
        //     }
        // </div>
    )
}

export default FeedbackList