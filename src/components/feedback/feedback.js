import { Component } from 'react';
import Statistics from './statistics/statistics';
import FeedbackOptions from './buttons/buttons';
import Section from './section/section';
import Notification from './notification/notification';

// import Button from './button';


class Feedback extends Component {
  // static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleAddFedbackGood = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
    this.goodFeedbackPercent();
  }

  handleAddFedbackNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
  }

  handleAddFedbackBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }))
  }

  countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)


  goodFeedbackPercent = () => {
    const countTotal = this.countTotalFeedback();
    return Math.round(this.state.good / countTotal * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { handleAddFedbackGood,
      handleAddFedbackNeutral,
      handleAddFedbackBad,
      countTotalFeedback,
      goodFeedbackPercent } = this;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options="Good"
            onLeaveFeedback={handleAddFedbackGood} />
          <FeedbackOptions
            options="Neutral"
            onLeaveFeedback={handleAddFedbackNeutral} />
          <FeedbackOptions
            options="Bad"
            onLeaveFeedback={handleAddFedbackBad} />
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
