import sData from "../data";
import considerLoging from "../../utilities/considerLoging";
import getEvents from "./getEvents";

function deleteEvent(id, settings){
    if(settings && settings.blockFetch){
        return;
    }
    return runFetch(id, settings);
}

function runFetch(id, settings){
    fetch(sData.fSet.fetchUrl + '/api/event/' + id, {
        method:"DELETE",
        credentials: 'include',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
    }
    })
    .then((res) => {
        return res.json();
       })
    .then((data) => {
        considerLoging(settings, data);
        getEvents();
    })
    .catch((err) => {
        console.error("An error happeoned in delete fetch");
        console.error(err.message);
    });
}

export default deleteEvent;