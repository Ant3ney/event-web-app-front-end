import sData from "../data";
import considerLoging from "../../utilities/considerLoging";

function getEvents(settings){
    if(settings && settings.blockFetch){
        return;
    }
    settings = {};
    settings.logData = true;
    return runFetch(settings);
}

function runFetch(settings){
    return new Promise((resolve, reject) => {
        fetch(sData.fSet.fetchUrl + '/api/event', {
            method: 'GET',
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
            sData.eSet.setEvents(data.allEvents);
            resolve(data);
        })
        .catch((err) => {
            console.error("An error happeoned in get events");
            console.error(err.message);
            reject(err);
        });
    });
}

export default getEvents;