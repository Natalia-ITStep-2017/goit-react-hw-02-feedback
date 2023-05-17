
import React from 'react';
import PropTypes from "prop-types";
import StatisticItem from './statisticItem';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

  // var variableName = Object.keys({ good })[0];

  return (
    <>
      <StatisticItem label="Good" value={good} />
      <StatisticItem label="Neutral" value={neutral} />
      <StatisticItem label="Bad" value={bad} />
      <StatisticItem label="Total" value={total} />
      <StatisticItem label="Positive feeddback" value={`${positivePercentage}%`} />
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics