import React, { Component } from 'react';
import config from '../../config.json';
import './VehicleList.scss';

class VehicleList extends Component {

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

  renderHeaders = () => {
    let headers = [];

    for (let i = 0; i < this.state.fleetHeaders.length; ++i) {
      let className = 'vehicle-list__header';
      let width = 100 / this.state.fleetHeaders.length;

      headers.push(
        <div className={className} key={i} style={{flexBasis: `${width}%`}}>
          {this.state.fleetHeaders[i]}
        </div>);
    }

    return headers;
  }

  renderColumns = (item) => {
    let columns = [];

    for (let i = 0; i < this.state.fleetHeaders.length; ++i) {
      let className = 'vehicle-list__column';
      let width = 100 / this.state.fleetHeaders.length;

      columns.push(
        <div className={className} key={i} style={{flexBasis: `${width}%`}}>
          {item[this.state.fleetHeaders[i]]}
        </div>);
    }

    return columns;
  }

  renderBody = () => {
    let rows = [];

    for (let i = 0; i < this.state.items.length; ++i) {
      let className = 'vehicle-list__item';
      let item = this.state.items[i];

      rows.push(
        <li className={className} key={i}>
          {this.renderColumns(item)}
        </li>);
    }

    return rows;
  }

  render() {
    return (
      <div className="vehicle-list__table">
        <div className="vehicle-list__headers">
          {this.renderHeaders()}
        </div>

        <ul className="vehicle-list__body">
          {this.renderBody()}
        </ul>
      </div>
    );
  }
}

export default VehicleList;