import sData from "../data";
import considerLoging from "../../utilities/considerLoging";
import getEvents from "./getEvents";

function createEvent(body, settings){
    if(settings && settings.blockFetch){
        return;
    }
    return runFetch(body, settings);
}   

function runFetch(body, settings){
    return new Promise((resolve, reject) => {
        fetch(sData.fSet.fetchUrl + '/api/event', {
            method: 'POST',
            credentials: 'include',
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: body
        })
        .then((res) => {
            considerLoging(settings, res);
            return res.json();
        })
        .then((data) => {
            considerLoging(settings, data);
            resolve(getEvents(), data);
        })
        .catch((err) => {
            console.error("err happeoned in createEvent.js fetch function");
            console.error(sData.fSet.fetchUrl + '/api/event');
            console.log(err.message);
        });
    });
}

export default createEvent;