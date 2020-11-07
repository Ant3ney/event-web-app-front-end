import sData from "../data";
import considerLoging from "../../utilities/considerLoging";

function signOut(settings){
    if(settings && settings.blockFetch){
        return;
    }
    return runFetch(settings);
}

function runFetch(settings){
    return new Promise((resolve, reject) => {
        fetch(sData.fSet.fetchUrl + '/user/signOut', {
            method: 'POST',
            mode: "cors",
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then((res) => {
            considerLoging(settings, res);
            return res.json();
        })
        .then((data) => {
            considerLoging(settings, data);
            sData.uSet.setUser(null);
            resolve(data);
        })
        .catch((err) => {
            console.error("err happeoned in signout fetch function");
            console.error(err.message);
            reject(err);
        });
    });
}

export default signOut;