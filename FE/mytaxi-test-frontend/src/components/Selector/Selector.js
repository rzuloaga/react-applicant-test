import React, { Component } from 'react';
import './Selector.scss';

class Selector extends Component {

  renderButtons = () => {
    let buttons = [];

    for (let i = 0; i < this.props.buttons.length; ++i) {
      let className = 'selector__button';

      if (this.props.selected === i) className += ' selector__button--selected';

      buttons.push(
        <button key={i}
          className={className}
          onClick={() => this.props.onClickHandler(i)}>
          {this.props.buttons[i].name}
        </button>);
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