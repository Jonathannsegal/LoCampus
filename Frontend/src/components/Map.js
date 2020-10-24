import React, { Component } from 'react';
import MapGl, {GeolocateControl} from 'react-map-gl';
import LOCATIONS from '../../public/locations.json';
import Pins from './Pins';


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100%',
        height: '100%',
        latitude: 42.0266573,
        longitude: -93.6456403,
        zoom: 8,
      },
    };
  }
    _onClickMarker = location => {
      //this.setState({popupInfo: location});
    };

  render() {
    return (
      <MapGl
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <Pins data={LOCATIONS} onClick={this._onClickMarker} />
        <GeolocateControl
          //fitBoundsOptions={{maxZoom: 17}}
          auto={true}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          showUserLocation={true}
        />
      </MapGl>
    );
  }
}

export default Map;
