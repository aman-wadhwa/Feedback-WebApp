import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Header from "./components/Header"
import { useState } from "react"
// import Feedbackitem from "./components/Feedbackitem"
import FeedbackData from "./data/feedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIcon from "./components/AboutIcon"

import { FeedbackProvider } from "./context/feedbackContext"



function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    // console.log(feedback)
    
    

    return (
        <FeedbackProvider>
        <Router>
        
        <Header/>
        
        <div className="container">
            <Routes>
            <Route exact path='/' element={
                <>
                    <FeedbackForm />
                    <FeedbackStats/>
                    <FeedbackList />
                    <AboutIcon/>
                </>
            }/>
            
            <Route path = '/about' element={<AboutPage/>}/>

            </Routes>
            
        </div>
        
        </Router>
    </FeedbackProvider>
        
    )
    
}

export default App