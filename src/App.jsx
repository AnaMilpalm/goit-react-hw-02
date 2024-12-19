import { useState, useEffect } from "react";
import "./App.css";
import "modern-normalize";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedbackChange = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div className="wrapperMain">
      <Description />
      <Options
        onFeedbackChange={handleFeedbackChange}
        onReset={resetFeedback}
        showReset={total > 0}
      />
      {total > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positive={positiveFeedback + "%"}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
