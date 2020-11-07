import React from "react";

function TestCookie(props){
    return(
        <button onClick={handleTest}>Test Cookie</button>
    );

    function handleTest(){
        fetch(props.fSet.fetchUrl + '/testSetCookie', {
            method: 'get',
            mode: "cors",
            credentials: 'include'
        })
        .then(() => {
            alert('Cookie may or may not have been added. Please check devtools >> aplication >> cookies >> https://deansmead...')
        })
        .catch((err) => {
            console.error("an error happeoned");
            console.error(err);  
        });
    }
}

export default TestCookie;