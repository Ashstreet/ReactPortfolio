//Base
import React, { Component } from 'react';

import Map from '../../atoms/Map';

class MapMolecule extends Component {
    render() {
      return (
        <Map mapLat={this.props.mapLat} mapLng={this.props.mapLng} />
      )
    }
  }

  export default MapMolecule;