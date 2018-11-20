import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import true_logo from './true.svg';
import './App.css';


class Home extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <img src={logo} alt="logo" />
          <img src={true_logo} alt="logo" />
        </div>
        <div className="component-wrapper">
          <Link to='/start'>
            <button className="button">
             ¡ Empecemos !
            </button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Home;
