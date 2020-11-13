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
        latitude: 42.025417,
        longitude: -93.646066,
        zoom: 15,
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
        mapStyle={this.props.mapStyle}
        mapboxApiAccessToken='pk.eyJ1IjoiYWRlaWNrIiwiYSI6ImNrZWVyeDR0dTAzNjYyd3BpNG95MnJtbmEifQ.EPFDghB0Ml_eeduUbERUlg'
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <Pins data={LOCATIONS} onClick={this._onClickMarker} />
        {(this.props.geolocate) ? 
        <GeolocateControl
          //fitBoundsOptions={{maxZoom: 17}}
          auto={true}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          showUserLocation={true}
        />
        : <></> //No Geolocate
      }
        
      </MapGl>
    );
  }
}

export default Map;
