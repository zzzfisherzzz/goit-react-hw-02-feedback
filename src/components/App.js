import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statsitics/Statistics';
import Notification from './Notification/Notification';
import Feedback from '../utils/Feedback';
import './App.css'

export default class App extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let positivePercentage = (good / (good + neutral + bad)) * 100;

    return positivePercentage.toFixed();
  };

  handleFeedbackChanger = e => {
    const { step } = this.props;
    const { name } = e.target;

    this.setState(prevState => ({ [name]: prevState[name] + step }));
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <div className="wrap">
        <Section title="Please live feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedbackChanger}
            options={Feedback}
          />
        </Section>
        <Section title="Statistics">
          {((good || bad || neutral) && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )) || <Notification message="No feedback given" />}
        </Section>
      </div>
    );
  }
}
