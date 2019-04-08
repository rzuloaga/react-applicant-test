import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar';
import Selector from './components/Selector';
import './App.scss';

class App extends Component {
  selectorFleetTitle = 'Fleet';
  selectorFleetButtons = [
    {
      name: 'All'
    },
    {
      name: 'MyTaxi'
    },
    {
      name: 'Car2go'
    }
  ];

  selectorDisplayTitle = 'Display';
  selectorDisplayButtons = [
    {
      name: 'List'
    },
    {
      name: 'Map'
    }
  ];

  render() {
    return (
      <div className="app">
        <HeaderBar />

        <div className="app__wrapper">
          <Selector title={this.selectorFleetTitle} buttons={this.selectorFleetButtons} />

          <Selector title={this.selectorDisplayTitle} buttons={this.selectorDisplayButtons} />
        </div>
      </div>
    );
  }
}

export default App;
