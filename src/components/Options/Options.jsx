import s from './Options.module.css';

const Options = ({ onFeedbackChange, onReset, showReset }) => {
    const handleGoodClicks = () => {
        onFeedbackChange({ good: 1, neutral: 0, bad: 0 });
    };

    const handleNeutralClicks = () => {
        onFeedbackChange({ good: 0, neutral: 1, bad: 0 });
    };

    const handleBadClicks = () => {
        onFeedbackChange({ good: 0, neutral: 0, bad: 1 });
    };

    return (
        <div className={s.wrapper}>
            <button onClick={handleGoodClicks} className={s.btn}>Good</button>
            <button onClick={handleNeutralClicks} className={s.btn}>Neutral</button>
            <button onClick={handleBadClicks} className={s.btn}>Bad</button>
            {showReset && (
                <button onClick={onReset} className={s.btn}>Reset</button>
            )}
        </div>
    );
};

export default Options;
