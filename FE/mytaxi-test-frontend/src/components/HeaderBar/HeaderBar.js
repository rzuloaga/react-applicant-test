import React, { Component } from 'react';
import './HeaderBar.scss';

class HeaderBar extends Component {
  render() {
    return (
      <header className="header-bar">
        <div className="header-bar__title">Our Vehicles</div>
      </header>
    );
  }
}

export default HeaderBar;