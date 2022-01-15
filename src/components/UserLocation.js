import React from "react";
import Button from "@material-ui/core/Button";
import "./UserLocation.css";
const UserLocation = (props) => {

  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      console.log(lat, long);
      props.onChangeLocation([lat, long])
    });
  };

  return (
    <div className="loc-button">
      <Button color="primary" variant="contained" onClick={fetchLocation}>
        Find Location
      </Button>
    </div>
  );
};

export default UserLocation;
