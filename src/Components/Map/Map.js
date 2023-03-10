import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const MapContainer = ({lat,lng}) => {
  
  const mapStyles = {height: "400px", width: "100%"};
  
  const defaultCenter = {
    lat: 14.3851, lng: 25.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey='API'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default MapContainer;