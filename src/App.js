import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <p className="App-intro">
          We at Bob the Builders take pride in our ability to build not just beautiful, high quality homes and work spaces, but strong, long lasting relationships with our clients.
        </p>
      </div>

    );
  }
}

export default App;
