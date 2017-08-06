import React, { Component } from 'react';
import './css/Header.css';
import lbplogo from './images/lbp-logo.png';

class Header extends Component {
    render() {
      return (
          <div className="App-header">
            <h1 className="App-title">Bob the Builder</h1>
            <img src={lbplogo} className="Lbp-logo" alt="Licensed building practitioner logo" />
          </div>
      );
  }
}

export default Header;