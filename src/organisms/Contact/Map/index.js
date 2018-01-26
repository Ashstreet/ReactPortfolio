//Base
import React, { Component } from 'react';

//Component
import Map from '../../../molecules/Map';

class MapOrganism extends Component {
    render() {
      return (
        <div>
            <Map mapLat={51.700207} mapLng={-0.607222} />
        </div>
      )
    }
  }

  export default MapOrganism;