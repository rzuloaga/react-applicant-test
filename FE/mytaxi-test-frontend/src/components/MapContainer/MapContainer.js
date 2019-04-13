import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './MapContainer.scss';
import apiKey from '../../apiKey.json';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedItem: {},
      items: this.props.items
    };
  }

  onMarkerClick = (props, marker, e) => {

    this.setState({
      selectedItem: props,
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

  renderAttributes = (item) => {
    let attributes = [];

    for (let i = 0; i < this.props.fleetHeaders.length; ++i) {
      let header = this.props.fleetHeaders[i];

      if (header !== 'id') {
      
        attributes.push(
          <p key={i}>
            <b>{header}:</b>  <span>{item[header]}</span>
          </p>);

      }
    }

    return attributes;
  }

  renderMarkers = () => {

    let markers = [];

    for (let i = 0; i < this.state.items.length; ++i) {
      const item = this.state.items[i];
      const itemCoordinates = item.coordinate ? item.coordinate : item.coordinates;
      const lat = itemCoordinates[1]
      const lng = itemCoordinates[0]

      markers.push(
        <div key={item.id}>
          <Marker
            onClick={this.onMarkerClick}
            id={item.id}
            position={{ lat:lat, lng: lng}}
            lat={itemCoordinates[1]}
            lng={itemCoordinates[0]}
            />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedItem.id}</h4>
              {this.renderAttributes(item)}
            </div>
          </InfoWindow>
        </div>
        );
    }

    return markers;



  }

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
          >
          {this.renderMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: apiKey.apiKey
  })(MapContainer);