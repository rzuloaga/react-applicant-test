import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './MapContainer.scss';
import apiKey from '../../apiKey.json';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick = (props, marker, e) => {

    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  }

  onClose = props => {

    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }

  };

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
    apiKey: apiKey.apiKey
  })(MapContainer);