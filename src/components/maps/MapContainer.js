import React, { useEffect } from "react";
import Map from './Map';
import testDirections from "../../appLogic/hereApi/testDirections";
import initMap from "../../appLogic/hereApi/initMap";

var subStyle = {
    width: "100%",
    height: "80%",
    position: "fixed",
    zIndex: 2,
    display: "flex"
}

var style = {
    width: "90%",
    height: "80%",
    border: "0.12rem solid lightgray",
    zIndex: 2
}

function MapContainer(props){
    useEffect(() => {
        initMap();
    }, []);
    return(
        <div style={subStyle}>
            <div className="m-auto" style={style}>
                <button onClick={testDirections} style={{zIndex: 3, position: "fixed"}}>Get Directions to Berlin</button>
                <Map />
                <button onClick={handleClose} style={{zIndex: 3, position: "fixed", top:'27em'}}>Close</button>
            </div>
        </div>
    );

    function handleClose(){
        props.mSet.setShowMap(null);
    }
}

export default MapContainer;