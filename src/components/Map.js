import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

const Map = (props) => {
  // const [zoom,setZoom]= useState(15);
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (map) map.flyTo(props.location);
  }, [props.location, map]);

  return (
    <MapContainer
      center={props.location}
      zoom={15}
      scrollWheelZoom={false}
      whenCreated={(map) => setMap(map)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {console.log("instance : " + map)}

      {props.showMarker && (
        <Marker position={props.location}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
