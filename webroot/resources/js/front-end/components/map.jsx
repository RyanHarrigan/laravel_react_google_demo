import React from 'react';
import {
  Map,
  GoogleApiWrapper
} from 'google-maps-react';

export class TimelineMap extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Map
        google={this.props.google}
        zoom={11}
        style={{
          width: '100%',
          height: '100%'
        }}
        initialCenter={{
          lat: 28.538336,
          lng: -81.379234
        }}
      />
    );
  }
}

// Higher Order Container for Map Component
export default GoogleApiWrapper({
    apiKey: process.env.MIX_GOOGLE_API
})(TimelineMap);
