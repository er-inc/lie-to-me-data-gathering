import React from 'react';
import { Link } from 'react-router-dom';

class Instructions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sessionId, apiKey, token, isInterviewer } = this.props;

    return (
      <div>
      Instructions
      </div>
    )
  }
}

export default Instructions;
