import React from "react";
import Event from "./Event";
import getEvents from "../../appLogic/fetching/getEvents";
import "../../css/event.css";
import shouldShow from '../../utilities/shouldShow';
import sData from '../../appLogic/data';

function EventContainer(){

    return(
        <div style={{height: "30rem", overflowY: "scroll", overflowX: "hidden"}}>
            <h3>Events</h3>
            <button onClick={getEvents}>Get Events</button>
            <div className="row">
                {!shouldShow('events') ? <div></div> : sData.eSet.events.map((event, i) => 
                 <div key={i} className="col-md-4 col-sm-6"><Event event={event} /></div>)}
            </div>
        </div>
    );
}

export default EventContainer;