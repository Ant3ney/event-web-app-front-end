import sData from "../data";
import considerLoging from "../../utilities/considerLoging";

function reValidateToken(settings){
    if(settings && settings.blockFetch){
        return;
    }
    return runFetch(settings);
}

function runFetch(settings){
    return new Promise((resolve, reject) => {
        fetch(sData.fSet.fetchUrl + '/user/reValidateKey', {
            method: 'GET',
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
            sData.uSet.setUser(data);
            resolve(data);
        })
        .catch((err) => {
            console.error("err happeoned");
            console.error(err.message);
            reject(err);
        });
    });
}

export default reValidateToken;