//AIzaSyBNT50LaJCZnJjk6owksK9QGjsRyrOJ2L0

import React from "react";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const SimpleMap= () =>{
  const defaultProps = {
    center: {
      lat: 19.432680,
      lng: -99.134209
    },
    zoom: 11
  };

  const {center, zoom} = defaultProps;

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      
      
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBNT50LaJCZnJjk6owksK9QGjsRyrOJ2L0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        

        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact> 
    </div>
  );
}


