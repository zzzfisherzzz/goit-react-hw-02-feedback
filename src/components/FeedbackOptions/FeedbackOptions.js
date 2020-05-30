import React from 'react';
;

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    <button
      type="button"
      onClick={onLeaveFeedback}
      name={options.GOOD}
    >
      Good
    </button>
    <button
      type="button"
      onClick={onLeaveFeedback}
      name={options.NEUTRAL}
    >
      Neutral
    </button>
    <button
      type="button"
      onClick={onLeaveFeedback}
      name={options.BAD}
    >
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
