import React from 'react';
import Columns from 'react-columns';

import VideoCallApp from './VideoCallApp.js';
import Question from './Question.js';
import Countdown from './Countdown.js';

class Questioning extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
		const { apiKey, sessionId, token } = this.props;
		var queries = [{ columns: 2, query: 'min-width: 860px'}];
    return (
			<div>
			<h1>Welcome!</h1>
			<p><strong>Please don't refresh or leave page.</strong></p>
      <Countdown hours={1} minutes={1} seconds={5} timeComponentsToShow={['minutes', 'seconds']} />
			<Columns queries={queries}>
				<VideoCallApp sessionId={sessionId} apiKey={apiKey} token={token}/>
				<Question/>
			</Columns>
			</div>
    )
  }
}

export default Questioning;
