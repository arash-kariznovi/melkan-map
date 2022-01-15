import React,{useState} from "react";
import UserLocation from "./UserLocation";
import Map from "./Map";
import "./MainBody.css";

const MainBody = ()=>{
    const [location, setLocation] = useState([36.31,59.5413]);
    const [showMarker, setShowMarker] = useState(false);

    const locationListener = (newLocation)=>{
        setLocation(prevLocation => newLocation)
        setShowMarker(true);
    }

    return(
        <div className="main">
            <Map location={location} showMarker={showMarker}/>
            <UserLocation onChangeLocation={locationListener}/>
        </div>
    )
}

export default MainBody;