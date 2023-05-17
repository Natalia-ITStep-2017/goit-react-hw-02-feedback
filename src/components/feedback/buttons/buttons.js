
import css from './buttons.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <button onClick={onLeaveFeedback} className={css.button}>{options}</button>
  )
};

export default FeedbackOptions;