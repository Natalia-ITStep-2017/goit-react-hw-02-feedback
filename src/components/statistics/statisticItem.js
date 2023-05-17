import React from 'react';
import PropTypes from "prop-types";
import css from './statistics.module.css';

const StatisticItem = ({ label, value }) => (
  <>
    <p className={css.label}>{label}:
      <span className={css.value}>{value}</span>

    </p>
  </>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,]).isRequired
};

export default StatisticItem
