import React, { useState } from "react";
import "../../css/auth.css";
import sData from '../../appLogic/data';

function SignUp(props){
    const [nameValue, setNameValue] = useState("not set");
    const [passwordValue, setPasswordValue] = useState("not set");

    return(
        <form onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Username</label>
            <input type="text" name="name" onChange={(event) => {formChange(event, "nameChange");}}/>
            <label>Password</label>
            <input type="password" name="password" onChange={(event) => {formChange(event, "passwordChange");}}/>
            <button>Submit</button>
        </form>
    );

    function formChange(event, type){
        if(type === "nameChange"){
            setNameValue(event.target.value);
        }
        else if(type === "passwordChange"){
            setPasswordValue(event.target.value);
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        var data = {
            name: nameValue,
            password: passwordValue,
            userType: "user"
        }

        data = JSON.stringify(data);

        console.log(data);

        fetch(sData.fSet.fetchUrl + '/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }).then((res) => {
            console.log(res);
            return res.json();
        }).then((data) => {
            console.log(data);
        });
    }
}

export default SignUp;