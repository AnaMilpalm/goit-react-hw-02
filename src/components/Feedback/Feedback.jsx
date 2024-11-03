import s from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positive }) => {
    return (
        <ul className={s.feedbackList}>
            <li>Good: <span>{good}</span></li>
            <li>Neutral: <span>{neutral}</span></li>
            <li>Bad: <span>{bad}</span></li>
            <li>Total: <span>{total}</span></li>
            <li>Positive: <span>{positive}</span></li>
        </ul>
    );
};

export default Feedback;
