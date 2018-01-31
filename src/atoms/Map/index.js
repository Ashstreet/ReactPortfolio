//Base
import React, { Component } from 'react';
import './index.css';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
          lat: this.props.mapLat,
          lng: this.props.mapLng
        }
      }

    componentDidMount() {
        const google = window.google;

        let map,
            marker;

        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: this.state.lat, lng: this.state.lng},
            zoom: 16,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
        });

        marker = new google.maps.Marker({
            map: map,
            position: {lat: this.state.lat, lng: this.state.lng}
        });
    }
      
    render() {
      return (
        <div id="map"></div>
      )
    }
  }

  export default Map;