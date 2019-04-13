import React, { Component } from 'react';
import config from '../../config.json';
import './Display.scss';
import VehicleList from '../VehicleList';
import MapContainer from '../MapContainer';

class Display extends Component {

  fleets;

  constructor(props) {
    super(props);
    
    this.fleets = config.fleetSelector.buttons;
    
    this.state = {
      fleetHeaders: this.fleets[props.selectedFleet].headers,
      items: []
    };

    this.fetchData();
  }

  fetchData = () => {
    fetch(
      `${config.apiUrl}${this.fleets[this.props.selectedFleet].url}`
      )
      .then(result => result.json())
      .then(items => {this.setState({items: items[Object.keys(items)[0]]})})
  }

  renderDisplay = (selectedDisplayIndex) => {

    const selectedDisplay = config.displaySelector.buttons[selectedDisplayIndex];

    if (selectedDisplay.isList) {

      return <VehicleList 
        key={this.props.selectedFleet}
        fleetHeaders={this.state.fleetHeaders}
        items={this.state.items}/>;

    } else if (selectedDisplay.isMap) {

      return <MapContainer 
        key={this.props.selectedFleet}
        fleetHeaders={this.state.fleetHeaders}
        items={this.state.items}/>;

    }

  }

  render() {
    return (
      <div key={this.props.selectedDisplay}>
        {this.renderDisplay(this.props.selectedDisplay)}
      </div>
    );
  }
}

export default Display;