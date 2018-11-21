import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home.js';
import Start from './Start.js';
import Instructions from './Instructions.js';
import VideoCallApp from './VideoCallApp.js';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <script src="//static.opentok.com/v2/js/opentok.min.js"></script>
          <Route exact={true} path="/" component={Home}/>
          <div className="component-wrapper">
            <Switch>
              <Route path="/start" component={Start}/>
              <Route
                path="/session/:sessionId/instructions"
                render={ ({ match, location }) => <Instructions sessionId={match.params.sessionId} apiKey={location.state.apiKey} token={location.state.token} isInterviewer={true} /> }
              />
              <Route
                path="/session/:sessionId"
                render={ ({ match, location }) => <VideoCallApp sessionId={match.params.sessionId} apiKey={location.state.apiKey} token={location.state.token} /> }
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
