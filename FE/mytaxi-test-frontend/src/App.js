import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar';
import Selector from './components/Selector';
import VehicleList from './components/VehicleList';
import config from './config.json';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonsClicked: Array(2).fill(0)
    }
  }

  handleClick = (selectorIndex) => {

    return (i) => {
      let newButtonsClicked = this.state.buttonsClicked.slice();

      newButtonsClicked[selectorIndex] = i;

      this.setState({buttonsClicked: newButtonsClicked});
    }

  }

  render() {
    return (
      <div className="app">
        <HeaderBar />

        <div className="app__wrapper">
          <div className="app__selectors">
            <Selector
              onClickHandler={this.handleClick(0)}
              selected={this.state.buttonsClicked[0]}
              title={config.fleetSelector.title}
              buttons={config.fleetSelector.buttons} />

            <Selector
              onClickHandler={this.handleClick(1)}
              selected={this.state.buttonsClicked[1]}
              title={config.displaySelector.title}
              buttons={config.displaySelector.buttons} />
          </div>

          <VehicleList 
            key={this.state.buttonsClicked[0]}
            selectedFleet={this.state.buttonsClicked[0]}
            selectedDisplay={this.state.buttonsClicked[1]}/>
        </div>
      </div>
    );
  }
}

export default App;
