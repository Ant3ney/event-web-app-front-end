import React, { useEffect } from "react";
import Map from './Map';
import testDirections from "../../appLogic/hereApi/testDirections";
import initMap from "../../appLogic/hereApi/initMap";
import sData from '../../appLogic/data';

var subStyle = {
    width: "100%",
    height: "80%",
    position: "fixed",
    zIndex: 7,
    display: "flex"
}

var style = {
    width: "90%",
    height: "80%",
    border: "0.12rem solid lightgray",
    zIndex: 7
}

function MapContainer(){
    useEffect(() => {
        initMap();
    }, []);
    return(
        <div style={subStyle}>
            <div className="m-auto" style={style}>
                <Map />
                <button onClick={handleClose} style={{zIndex: 3, position: "fixed", top:'27em'}}>Close</button>
            </div>
        </div>
    );

    function handleClose(){
        sData.mSet.setShowMap(null);
    }
}

export default MapContainer;