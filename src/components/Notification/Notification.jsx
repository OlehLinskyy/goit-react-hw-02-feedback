import React, { Component } from 'react';
import css from './Notification.module.css';

class Notification extends Component {
  render() {
    return <p className={css.notification}>There is no feedback</p>;
  }
}
export default Notification;
