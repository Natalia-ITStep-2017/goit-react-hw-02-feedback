import React from 'react';
import css from './section.module.css';

const Section = ({ title, children }) => (
  <section className={css.section}>
    <h1 className={css.title}>{title}</h1>
    {children}
  </section>
);

export default Section
