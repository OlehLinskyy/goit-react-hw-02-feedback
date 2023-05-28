import React, { Component } from 'react';
import Feedback from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  good = () => {
    this.setState(prevState => ({
      good: (prevState.good += 1),
    }));
  };
  neutral = () => {
    this.setState(prevState => ({
      neutral: (prevState.neutral += 1),
    }));
  };
  bad = () => {
    this.setState(prevState => ({
      bad: (prevState.bad += 1),
    }));
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round(
      (100 * this.state.good) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  }
  render() {
    return (
      <div>
        <Section title="Please leave Feedback">
          <Feedback
            optionsGood={this.good}
            optionsNeutral={this.neutral}
            optionsBad={this.bad}
          />
          <Statistics
            goodValue={this.state.good}
            neutralValue={this.state.neutral}
            badValue={this.state.bad}
            totalValue={this.countTotalFeedback()}
            positiveFeedbackValue={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
