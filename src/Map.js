import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 38.9072,
  lng: -77.0369
};

const metroStops = [
  { name: 'Metro Center', position: { lat: 38.898314, lng: -77.028077 } },
  { name: 'Gallery Place', position: { lat: 38.8983, lng: -77.0219 } },
  { name: "L'Enfant Plaza", position: { lat: 38.8848, lng: -77.0219 } },
  { name: 'Union Station', position: { lat: 38.8971, lng: -77.0064 } },
  { name: 'Pentagon', position: { lat: 38.869, lng: -77.054 } },
  { name: 'Smithsonian', position: { lat: 38.888, lng: -77.028 } },
  { name: 'Farragut West', position: { lat: 38.9013, lng: -77.0398 } },
  { name: 'Farragut North', position: { lat: 38.9035, lng: -77.0399 } },
  { name: 'Dupont Circle', position: { lat: 38.9101, lng: -77.043 } },
  { name: 'Foggy Bottom', position: { lat: 38.9007, lng: -77.0502 } },
  { name: 'Rosslyn', position: { lat: 38.8961, lng: -77.0717 } },
  { name: 'Navy Yard', position: { lat: 38.8765, lng: -77.0057 } }
];

function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {metroStops.map((stop) => (
          <Marker key={stop.name} position={stop.position} label={stop.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
