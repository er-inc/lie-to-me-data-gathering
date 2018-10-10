import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import true_logo from './true.svg';
import './App.css';


class App extends Component {
  state = {
    sessionId: 0
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact={true} path="/" render={() => (
            <header className="App-header"> 
              <img src={logo} alt="logo" />
              <img src={true_logo} alt="logo" />
              <div className="component-wrapper">
                <input type="text" value={this.state.sessionId} />
                <Link to='/start'>
                  <button className="button">
                    Search
                  </button>
                </Link>
              </div>
            </header>
          )}/>
          <div>
            <Route path="/start" component={HelloWorld}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

class HelloWorld extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}
