import sData from "../data";
import considerLoging from "../../utilities/considerLoging";

function signIn(body, settings){
    if(settings && settings.blockFetch){
        return;
    }
    return runFetch(body, settings);
}

function runFetch(body, settings){
    return new Promise((resolve, reject) => {
        fetch(sData.fSet.fetchUrl + '/user/signIn', {
            method: 'POST',
            mode: "cors",
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: body
        })
        .then((res) => {
            considerLoging(settings, res);
            return res.json();
        })
        .then((data) => {
            considerLoging(settings, data);
            sData.uSet.setUser(data.user);
            resolve(data);
        })
        .catch((err) => {
            console.error("err happeoned");
            console.error(err.message);
            reject(err);
        });
    });
}

export default signIn;