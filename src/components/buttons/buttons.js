import PropTypes from "prop-types";
import css from './buttons.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <button onClick={onLeaveFeedback} className={css.button}>{options}</button>
  )
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;