import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import VideoCallApp from './VideoCallApp.js'

import logo from './logo.svg';
import true_logo from './true.svg';
import './App.css';


class App extends React.Component {
  state = {
    sessionId: ''
  }

  updateInputvalue(evt) {
    this.setState({
      sessionId: evt.target.value
    });
  }

  apiKey() {
    return('46178502')
  }

  token() {
    return('T1==cGFydG5lcl9pZD00NjE3ODUwMiZzaWc9MDI4NmE5MzE4YzY1MWZiYTlkMDU5MjcwYWJjMjk1MWIzODBmMTE4MTpzZXNzaW9uX2lkPTJfTVg0ME5qRTNPRFV3TW41LU1UVXpPVEV6TmpVME5qa3pNSDVNZWtGWEwzRkhXakJOUmtKVFYwcHRSR2xPUVUxbWFuWi1mZyZjcmVhdGVfdGltZT0xNTM5MTM2NTYyJm5vbmNlPTAuMTYyODk4NDU5MTM2NzkwOCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTM5NzQxMzY0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9')
  }

  render() {
    const location = {
      pathname: `/session/${this.state.sessionId}`,
      state: { token: this.token(), apiKey: this.apiKey() }
    }
    return (
      <BrowserRouter>
        <div className="App">
          <script src="//static.opentok.com/v2/js/opentok.min.js"></script>
          <Route exact={true} path="/" render={() => (
            <header className="App-header">
              <div>
                <img src={logo} alt="logo" />
                <img src={true_logo} alt="logo" />
              </div>
              <div className="component-wrapper">
                <input type="text" value={this.state.sessionId} onChange={evt => this.updateInputvalue(evt)} />
                <Link to={ location }>
                  <button className="button">
                    Search
                  </button>
                </Link>
              </div>
            </header>
          )}/>
          <div>
            <Route
              path="/session/:sessionId"
              render={ ({ match, location }) => <VideoCallApp sessionId={match.params.sessionId} apiKey={location.state.apiKey} token={location.state.token} /> }
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
