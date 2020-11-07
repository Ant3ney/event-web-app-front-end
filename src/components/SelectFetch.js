import React from "react";

function SelectFetch(props){
    return(
        <div>
            <h3>Select your url for fetching Data</h3>
            <select name="domains" onChange={handleChange}>
            <option value="https://deansmead-eventapp-65150.herokuapp.com">https://deansmead-eventapp-65150.herokuapp.com(default)</option>
                <option value="http://localhost:3006">http://localhost:3006</option>
            </select>
            <button onClick={() => {props.initialFetch()}}>Re init page</button>
        </div>
    );

    function handleChange(event){
        var url = event.target.value;
        props.fSet.setFetchUrl(url, {logData: true});
        console.log(props.fSet.fetchUrl);
    }
}

export default SelectFetch;