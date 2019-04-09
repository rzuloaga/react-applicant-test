import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar';
import Selector from './components/Selector';
import selectors from './assets/selectors.json';
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
          <Selector
            onClickHandler={this.handleClick(0)}
            selected={this.state.buttonsClicked[0]}
            title={selectors.selectorFleetTitle}
            buttons={selectors.selectorFleetButtons} />

          <Selector
            onClickHandler={this.handleClick(1)}
            selected={this.state.buttonsClicked[1]}
            title={selectors.selectorDisplayTitle}
            buttons={selectors.selectorDisplayButtons} />
        </div>
      </div>
    );
  }
}

export default App;
