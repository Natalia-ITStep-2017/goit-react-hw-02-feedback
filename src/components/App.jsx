import { Component } from 'react';
import Statistics from './statistics/statistics';
import FeedbackOptions from './buttons/button';
import Section from './section/section';
import Notification from './notification/notification';

class Feedback extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

handleAddFeedback = (option) => {
  const stateOption = option.toLowerCase();
  this.setState((prevState) => ({
    [stateOption]: prevState[stateOption] + 1
  })
  );
  }

  countTotalFeedback = () => (
    this.state.good + this.state.neutral + this.state.bad
  )


  goodFeedbackPercent = () => {
    const countTotal = this.countTotalFeedback();
    return Math.round(this.state.good / countTotal * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { handleAddFeedback,
      countTotalFeedback,
      goodFeedbackPercent } = this;

    return (
      <div>
        <Section title="Please leave feedback">
        <FeedbackOptions
            options = {Object.keys(this.state)}
            onLeaveFeedback={handleAddFeedback} />
        </Section>
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistic">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={goodFeedbackPercent()} />
          </Section>
        )}
      </div>
    )
  };
}

export default Feedback;