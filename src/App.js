import React from 'react';
import PropTypes from 'prop-types';
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
    return (
      <BrowserRouter>
        <div className="App">
          <script src="//static.opentok.com/v2/js/opentok.min.js"></script>
          <Route exact={true} path="/" render={() => (
            <header className="App-header"> 
              <img src={logo} alt="logo" />
              <img src={true_logo} alt="logo" />
              <div className="component-wrapper">
                <input type="text" value={this.state.sessionId} onChange={evt => this.updateInputvalue(evt)} />
                <Link to='/session'>
                  <button className="button">
                    Search
                  </button>
                </Link>
              </div>
            </header>
          )}/>
          <div>
            <Route
              path="/session"
              render={() => <VideoCallApp sessionId={this.state.sessionId} apiKey={this.apiKey()} token={this.token()} />}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        {this.props.otherProp}
      </div>
    )
  }
}

HelloWorld.propTypes = {
  credentials: PropTypes.string
};