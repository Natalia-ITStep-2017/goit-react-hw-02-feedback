import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import css from './buttons.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (<div>
    {
      options.map(option => {
        return (< button
          key={nanoid()}
          onClick={() => onLeaveFeedback(option)}
          className={css.button} >
          {option}
        </button >
        )
      })
    }

  </div>)
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;