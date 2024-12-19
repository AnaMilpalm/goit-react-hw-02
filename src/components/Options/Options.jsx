import s from "./Options.module.css";

const Options = ({ onFeedbackChange, onReset, showReset }) => {
  const handleGoodClicks = () => {
    onFeedbackChange("good");
  };

  const handleNeutralClicks = () => {
    onFeedbackChange("neutral");
  };

  const handleBadClicks = () => {
    onFeedbackChange("bad");
  };

  return (
    <div className={s.wrapper}>
      <button onClick={handleGoodClicks} className={s.btn}>
        Good
      </button>
      <button onClick={handleNeutralClicks} className={s.btn}>
        Neutral
      </button>
      <button onClick={handleBadClicks} className={s.btn}>
        Bad
      </button>
      {showReset && (
        <button onClick={onReset} className={s.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
