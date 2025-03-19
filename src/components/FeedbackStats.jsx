import FeedbackContext from '../context/feedbackContext'
import { useContext } from 'react'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    let avg = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0)
    avg /= feedback.length;
    avg = parseFloat(avg.toFixed(1));
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating : {isNaN(avg) ? 0 : avg}</h4>
    </div>
  )
}

export default FeedbackStats
