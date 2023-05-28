import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
class Feedback extends Component {
  render() {
    const { optionsGood } = this.props;
    const { optionsNeutral } = this.props;
    const { optionsBad } = this.props;
    return (
      <div className={css.buttonList}>
        <button className={css.button} type="button" onClick={optionsGood}>
          😀
        </button>
        <button className={css.button} type="button" onClick={optionsNeutral}>
          😐
        </button>
        <button className={css.button} type="button" onClick={optionsBad}>
          ☹️
        </button>
      </div>
    );
  }
}
export default Feedback;
Feedback.propTypes = {
  optionsGood: PropTypes.func.isRequired,
  optionsNeutral: PropTypes.func.isRequired,
  optionsBad: PropTypes.func.isRequired,
};
