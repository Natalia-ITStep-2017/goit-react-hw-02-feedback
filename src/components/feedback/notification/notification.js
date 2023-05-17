import React from 'react';
import css from './notification.module.css';

const Notification = ({ message }) => (
  <>
    <p className={css.notification}>{message}</p>
  </>
);

export default Notification