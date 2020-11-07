import React from "react";
import placeholder from "../images/images.png";
import data from "../appLogic/data";
import getEvents from "../appLogic/fetching/getEvents";
import deleteEvent from "../appLogic/fetching/deleteEvent";
import showDirections from "../appLogic/hereApi/showDirectionsTo";
import "../css/event.css";

function Event(props){
    return(
    <div className="container pb-1 mb-1">
        <h1 className="name">{props.event ? props.event.name : "error"}</h1>
        <img className="imageContainer" src={placeholder} />
        <div className="row mb-1">
            <div className="col-6">
                <p><strong>Location: </strong>{props.event ? props.event.addressLine_1 : "error"}</p>
                <p><strong>Region: </strong>{props.event ? props.event.region : "error"}</p>
                <p><strong>City: </strong>{props.event ? props.event.city : "error"}</p>
                <p><strong>Country: </strong>{props.event ? props.event.country : "error"}</p>
                <p><strong>Post code: </strong>{props.event ? props.event.postCode : "error"}</p>
            </div>
            <div className="col-6">
                <p><strong>Start date: </strong>{props.event ? props.event.eventStartDate : "error"}</p>
                <p><strong>End date: </strong>{props.event ? props.event.eventEndDate : "error"}</p>
                <p><strong>Category: </strong>{props.event ? props.event.category : "error"}</p>
                <p><strong>Notes: </strong>{props.event ? props.event.notes : "error"}</p>
                <p><strong>Status: </strong>{props.event ? props.event.status : "error"}</p>
            </div>
        </div>
        <div className="mx-auto d-flex">
            <button onClick={handleDirections}>Directions</button>
            {canEdit() ? <button onClick={handleEdit}>Edit</button> : <div></div>}
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>);

    
    function handleDirections(){
        var cords = {
            lat: props.event.geocode.lat,
            long: props.event.geocode.long
        }
        showDirections(cords);
        data.mSet.setShowMap(true);
    }
    function handleEdit(event){
        event.preventDefault();
        data.curentId = props.event._id;
        props.eSet.setShowUpdate(true);
    }
    function handleDelete(){
        data.curentId = props.event._id;
        deleteEvent(props.event._id)
    }
    function canEdit(){
        var event = props.event;
        var user = props.user;
        if(user._id === event.createdBy){
            return true;
        }
        return false;
    }
}

export default Event;