import React from 'react';
import css from './statistics.module.css';

const StatisticItem = ({ label, value }) => (
  <>
    <p className={css.label}>{label}:
      <span className={css.value}>{value}</span>

    </p>
  </>
);

export default StatisticItem
