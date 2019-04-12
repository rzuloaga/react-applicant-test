import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './MapContainer.scss';

export class MapContainer extends Component {
  render() {
    return (
      <div className="map-container">
        <Map
          className="map-container__map"
          google={this.props.google}
          zoom={12}
          initialCenter={{
            lat: 53.54,
            lng: 10
          }}
          />
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAW0P1t-XKXfhyT8iwTDiuFZdbQiUy8y2k'
  })(MapContainer);