import React, { Component } from 'react';
import './Selector.scss';

class Selector extends Component {
  render() {
    return (
      <div className="selector">
        <div className="selector__title">{this.props.title}</div>
        <div className="selector__buttons-wrapper">
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

export default Selector;