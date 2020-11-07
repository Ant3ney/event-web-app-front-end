import sData from '../data';
import considerLoging from "../../utilities/considerLoging";

function initialFetch(settings){
    if(settings && settings.blockFetch){
        return;
    }
    return runFetch(settings);
}

function runFetch(settings){
    return new Promise((resolve, reject) => {
        fetch(sData.fSet.fetchUrl + '/user/isValid', {
            method:"GET",
            credentials: 'include',
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
        })
        .then((res) => {
            considerLoging(settings, console.log(res));
            return res.json();
        })
        .then((data) => {
            if(data.isValid){
              sData.uSet.setUser(data.user);
              considerLoging(settings, data.user);
            }
            else{
                sData.uSet.setUser(null);
            }
            considerLoging(settings, data);
            resolve(data);
        })
        .catch((err) => {
            considerLoging(settings, "An error happeoned");
            considerLoging(settings, err.message);
            reject(err);
        });
    });   
}

export default initialFetch;