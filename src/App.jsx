import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import { useState, useEffect } from 'react';
import 'modern-normalize';

function App() {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

  

    const handleFeedbackChange = (newFeedback) => {
      setFeedback(prevFeedback => {
          const totalGood = prevFeedback.good + newFeedback.good;
          const totalNeutral = prevFeedback.neutral + newFeedback.neutral;
          const totalBad = prevFeedback.bad + newFeedback.bad;
          const total = totalGood + totalNeutral + totalBad;
          const positive = total > 0 ? Math.round((totalGood / total) * 100) : 0; 
  
          return {
              good: totalGood,
              neutral: totalNeutral,
              bad: totalBad,
              total: total,
              positive: positive + '%'
          };
      });
  };

    const resetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    };

    const hasFeedback = feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0;

    return (
        <div className='wrapperMain'>
            <Description />
            <Options 
                onFeedbackChange={handleFeedbackChange} 
                onReset={resetFeedback} 
                showReset={hasFeedback} 
            />
            {hasFeedback && <Feedback {...feedback} />}
            {!hasFeedback && <p className='feedbackList'>No feetback yet</p>}
        </div>
    );
}

export default App;
