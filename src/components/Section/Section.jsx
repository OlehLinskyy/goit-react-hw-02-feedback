import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Section.module.css';

class Section extends Component {
  render() {
    const { title } = this.props;
    const { children } = this.props;
    return (
      <>
        {title && <h1 className={css.title}>{title}</h1>}
        {children}
      </>
    );
  }
}
export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
