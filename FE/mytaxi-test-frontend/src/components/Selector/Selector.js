import React, { Component } from 'react';
import './Selector.scss';

class Selector extends Component {
  buttons;

  constructor(props) {
    super(props);

    this.buttons = this.props.buttons;
  }

  renderButtons = () => {
    let buttons = [];

    for (let i = 0; i < this.buttons.length; ++i) {
      buttons.push(<button className={`selector__button selector__button--${i}`}>{this.buttons[i].name}</button>);
    }

    return buttons;
  }

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