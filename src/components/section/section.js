import React from 'react';
import PropTypes from "prop-types";
import css from './section.module.css';

const Section = ({ title, children }) => (
  <section className={css.section}>
    <h1 className={css.title}>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Section
