import React from "react";
import Event from "./Event";
import getEvents from "../appLogic/fetching/getEvents";
import "../css/event.css";

function EventContainer(props){

    return(
        <div style={{height: "30rem", overflowY: "scroll", overflowX: "hidden"}}>
            <h3>Events</h3>
            <button onClick={getEvents}>Get Events</button>
            <div className="row">
                {!props.eSet.events ? <div></div> : props.eSet.events.map((event, i) => 
                 <div key={i} className="col-md-4 col-sm-6"><Event fSet={props.fSet} user={props.user} eSet={props.eSet} event={event} /></div>)}
            </div>
        </div>
    );
}

export default EventContainer;