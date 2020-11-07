import sData from "../data";
import considerLoging from "../../utilities/considerLoging";
import getEvents from "./getEvents";

function updateEvent(body, settings){
    if(settings && settings.blockFetch){
        return;
    }
    return runFetch(body, settings);
}

function runFetch(body, settings){
    return new Promise((resolve, reject) => {
        fetch(sData.fSet.fetchUrl + '/api/event/' + sData.curentId, {
            method: 'PUT',
            credentials: 'include',
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: body
        })
        .then((res) => {
            considerLoging(settings, "url is: " + sData.fSet.fetchUrl + '/api/event/' + sData.curentId);
            considerLoging(settings, 'data.curentId: ' + sData.curentId);
            return res.json();
        }).then((data) => {
            considerLoging(settings, "===================Below is the updated data===================");
            considerLoging(settings, data);
            sData.eSet.setShowUpdate(false);
            resolve(getEvents(), data);
        }).catch((err) => {
            console.error("Something has gone wrong in UpdateEventHolder's fetch file");
            console.error(err.message);
        });
    });
}

export default updateEvent;