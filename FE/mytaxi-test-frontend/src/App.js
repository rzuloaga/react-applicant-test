import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderBar />
      </div>
    );
  }
}

export default App;
