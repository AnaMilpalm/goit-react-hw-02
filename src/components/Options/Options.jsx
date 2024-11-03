import Feedback from '../Feedback/Feedback';
import s from './Options.module.css';
import { useState } from 'react';
// import feedbacks from './../../assets/feedbacks.json';


const Options = ({ onFeedbackChange}) => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodClicks = () => {
        setGood(prevState => {
            const newGood = prevState + 1;
            onFeedbackChange({good: newGood, neutral, bad});
            return newGood;
        });
    }

    const handleNeutralClicks = () => {
        setNeutral(prevState => {
            const newNeutral = prevState + 1;
            onFeedbackChange({ good, neutral: neutral + 1, bad})
            return newNeutral;
        });

    }

    const handleBadClicks = () => {
        setBad(prevState => {
            const newBad = prevState + 1;
            onFeedbackChange({ good, neutral, bad: bad + 1})
            return newBad;
        });
    }

    return (
        <>
        <div className={s.wrapper}>
            <button onClick={handleGoodClicks} className={s.btn}>Good </button>
            <button onClick={handleNeutralClicks} className={s.btn}>Neutral</button>
            <button onClick={handleBadClicks} className={s.btn}>Bad</button>
        </div>
          <ul className={s.feedbacksList}>
                    <li className={s.item} >
                     <Feedback 
                      good = {feedbacks.good}
                      neutral ={feedbacks.neutral}
                      bad={feedbacks.bad}/>
                    </li>
          </ul>
        </>
    )
}
export default Options;