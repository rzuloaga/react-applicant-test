import React, { Component } from 'react';
import './VehicleList.scss';

class VehicleList extends Component {

  renderHeaders = () => {
    let headers = [];

    for (let i = 0; i < this.props.fleetHeaders.length; ++i) {
      let className = 'vehicle-list__header';
      let width = 100 / this.props.fleetHeaders.length;

      headers.push(
        <div className={className} key={i} style={{flexBasis: `${width}%`}}>
          {this.props.fleetHeaders[i]}
        </div>);
    }

    return headers;
  }

  renderColumns = (item) => {
    let columns = [];

    for (let i = 0; i < this.props.fleetHeaders.length; ++i) {
      let className = 'vehicle-list__column';
      let width = 100 / this.props.fleetHeaders.length;

      columns.push(
        <div className={className} key={i} style={{flexBasis: `${width}%`}}>
          {item[this.props.fleetHeaders[i]]}
        </div>);
    }

    return columns;
  }

  renderBody = () => {
    let rows = [];

    for (let i = 0; i < this.props.items.length; ++i) {
      let className = 'vehicle-list__item';
      let item = this.props.items[i];

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